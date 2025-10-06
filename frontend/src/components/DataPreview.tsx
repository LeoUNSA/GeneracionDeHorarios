import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DataPreviewProps {
  data: {
    type: 'csv' | 'xml';
    fileName: string;
    data: any;
    meta?: any;
  };
}

const DataPreview: React.FC<DataPreviewProps> = ({ data }) => {
  const renderCSVPreview = () => {
    if (!data.data || data.data.length === 0) {
      return <Typography>No hay datos para mostrar</Typography>;
    }

    const headers = Object.keys(data.data[0]);
    const previewData = data.data.slice(0, 10); // Mostrar solo las primeras 10 filas

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Vista Previa (primeras 10 filas de {data.data.length})
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>
                    <strong>{header}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {previewData.map((row: any, index: number) => (
                <TableRow key={index}>
                  {headers.map((header) => (
                    <TableCell key={header}>{row[header]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  const renderXMLPreview = () => {
    const renderObject = (obj: any, depth: number = 0): JSX.Element[] => {
      return Object.entries(obj).map(([key, value]) => {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          return (
            <Accordion key={key} defaultExpanded={depth < 2}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <strong>{key}</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ pl: 2 }}>
                  {renderObject(value, depth + 1)}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        } else if (Array.isArray(value)) {
          return (
            <Accordion key={key} defaultExpanded={depth < 2}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <strong>{key}</strong> <Chip label={`${value.length} elementos`} size="small" sx={{ ml: 1 }} />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ pl: 2 }}>
                  {value.slice(0, 5).map((item, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="subtitle2">Elemento {index + 1}:</Typography>
                      {typeof item === 'object' ? renderObject(item, depth + 1) : (
                        <Typography variant="body2">{String(item)}</Typography>
                      )}
                    </Box>
                  ))}
                  {value.length > 5 && (
                    <Typography variant="caption" color="textSecondary">
                      ... y {value.length - 5} elementos más
                    </Typography>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return (
            <Box key={key} sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>{key}:</strong> {String(value)}
              </Typography>
            </Box>
          );
        }
      });
    };

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Estructura XML
        </Typography>
        {renderObject(data.data)}
      </Box>
    );
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5">
          Datos Cargados
        </Typography>
        <Chip 
          label={data.type.toUpperCase()} 
          color="primary" 
        />
      </Box>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Archivo: {data.fileName}
      </Typography>

      <Box mt={3}>
        {data.type === 'csv' ? renderCSVPreview() : renderXMLPreview()}
      </Box>
    </Paper>
  );
};

export default DataPreview;
