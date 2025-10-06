import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Tab,
  Tabs,
  Alert,
  CircularProgress,
} from '@mui/material';
import FileUploadZone from '../components/FileUploadZone';
import DataPreview from '../components/DataPreview';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`data-tabpanel-${index}`}
      aria-labelledby={`data-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const DataLoader: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploadedData, setUploadedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    setError(null);

    try {
      const fileType = file.name.split('.').pop()?.toLowerCase();
      
      if (fileType === 'csv') {
        await handleCSVUpload(file);
      } else if (fileType === 'xml') {
        await handleXMLUpload(file);
      } else {
        throw new Error('Formato de archivo no soportado. Use CSV o XML.');
      }
    } catch (err: any) {
      setError(err.message || 'Error al procesar el archivo');
    } finally {
      setLoading(false);
    }
  };

  const handleCSVUpload = async (file: File) => {
    const Papa = await import('papaparse');
    
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setUploadedData({
          type: 'csv',
          fileName: file.name,
          data: results.data,
          meta: results.meta,
        });
      },
      error: (error: Error) => {
        throw new Error(`Error al parsear CSV: ${error.message}`);
      },
    });
  };

  const handleXMLUpload = async (file: File) => {
    const xml2js = await import('xml2js');
    const text = await file.text();
    
    xml2js.parseString(text, (err, result) => {
      if (err) {
        throw new Error(`Error al parsear XML: ${err.message}`);
      }
      
      setUploadedData({
        type: 'xml',
        fileName: file.name,
        data: result,
      });
    });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Carga de Datos Institucionales
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="data load tabs">
          <Tab label="Cargar CSV" />
          <Tab label="Cargar XML (UniTime)" />
          <Tab label="Entrada Manual" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="body1" paragraph>
            Cargue archivos CSV con la información de cursos, aulas, profesores y restricciones.
          </Typography>
          <FileUploadZone 
            onFileUpload={handleFileUpload}
            acceptedFormats=".csv"
            loading={loading}
          />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="body1" paragraph>
            Cargue archivos XML en formato UniTime (pu-fal07-cs).
          </Typography>
          <FileUploadZone 
            onFileUpload={handleFileUpload}
            acceptedFormats=".xml"
            loading={loading}
          />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="body1" paragraph>
            Entrada manual de datos (próximamente).
          </Typography>
          <Alert severity="info">
            Esta funcionalidad estará disponible en la siguiente versión.
          </Alert>
        </TabPanel>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {uploadedData && !loading && (
        <DataPreview data={uploadedData} />
      )}
    </Container>
  );
};

export default DataLoader;
