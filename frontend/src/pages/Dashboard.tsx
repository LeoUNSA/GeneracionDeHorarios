import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import {
  courseService,
  classroomService,
  teacherService,
  scheduleService,
} from '../services/api';

interface Stats {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats[]>([
    { title: 'Cursos', count: 0, icon: <SchoolIcon fontSize="large" />, color: '#1976d2' },
    { title: 'Aulas', count: 0, icon: <ClassIcon fontSize="large" />, color: '#dc004e' },
    { title: 'Profesores', count: 0, icon: <PersonIcon fontSize="large" />, color: '#2e7d32' },
    { title: 'Horarios', count: 0, icon: <EventIcon fontSize="large" />, color: '#ed6c02' },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [courses, classrooms, teachers, schedules] = await Promise.all([
          courseService.getAll(),
          classroomService.getAll(),
          teacherService.getAll(),
          scheduleService.getAll(),
        ]);

        setStats([
          { title: 'Cursos', count: courses.data.length, icon: <SchoolIcon fontSize="large" />, color: '#1976d2' },
          { title: 'Aulas', count: classrooms.data.length, icon: <ClassIcon fontSize="large" />, color: '#dc004e' },
          { title: 'Profesores', count: teachers.data.length, icon: <PersonIcon fontSize="large" />, color: '#2e7d32' },
          { title: 'Horarios', count: schedules.data.length, icon: <EventIcon fontSize="large" />, color: '#ed6c02' },
        ]);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching stats:', err);
        setError(err.response?.data?.detail || 'Error al cargar las estadísticas del sistema');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Dashboard - Sistema de Generación de Horarios
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress />
        </Box>
      ) : (
        <>
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
              El sistema está conectado al backend Django REST API en puerto 8000.
              Los datos que ves arriba son datos reales cargados desde la base de datos.
            </Typography>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
