import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Cursos', count: 0, icon: <SchoolIcon fontSize="large" />, color: '#1976d2' },
    { title: 'Aulas', count: 0, icon: <ClassIcon fontSize="large" />, color: '#dc004e' },
    { title: 'Profesores', count: 0, icon: <PersonIcon fontSize="large" />, color: '#2e7d32' },
    { title: 'Horarios', count: 0, icon: <EventIcon fontSize="large" />, color: '#ed6c02' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Dashboard - Sistema de Generación de Horarios
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4">
                      {stat.count}
                    </Typography>
                  </Box>
                  <Box sx={{ color: stat.color }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Bienvenido al Sistema de Generación de Horarios
        </Typography>
        <Typography variant="body1" paragraph>
          Este sistema permite la gestión y generación automática de horarios universitarios
          utilizando algoritmos genéticos para optimizar la asignación de recursos.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Para comenzar, dirígete a "Cargar Datos" para importar la información institucional
          mediante archivos CSV o XML (UniTime).
        </Typography>
      </Paper>
    </Container>
  );
};

export default Dashboard;
