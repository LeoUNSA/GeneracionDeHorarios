import React, { useCallback } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const UploadBox = styled(Paper)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.dark,
  },
}));

interface FileUploadZoneProps {
  onFileUpload: (file: File) => void;
  acceptedFormats: string;
  loading?: boolean;
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onFileUpload,
  acceptedFormats,
  loading = false,
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFileUpload(e.dataTransfer.files[0]);
      }
    },
    [onFileUpload]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <UploadBox
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={handleClick}
      sx={{
        backgroundColor: dragActive ? 'action.hover' : 'background.paper',
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={acceptedFormats}
        onChange={handleChange}
        style={{ display: 'none' }}
        disabled={loading}
      />
      <CloudUploadIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        {loading ? 'Procesando archivo...' : 'Arrastra y suelta tu archivo aquí'}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        o
      </Typography>
      <Button
        variant="contained"
        component="span"
        disabled={loading}
      >
        Seleccionar Archivo
      </Button>
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        Formatos aceptados: {acceptedFormats}
      </Typography>
    </UploadBox>
  );
};

export default FileUploadZone;
