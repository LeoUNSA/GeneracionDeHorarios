import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Chip,
} from '@mui/material';
import {
  courseService,
  classroomService,
  teacherService,
  timeSlotService,
  Course,
  Classroom,
  Teacher,
  TimeSlot,
} from '../services/api';

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

const DataManagement: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [courses, setCourses] = useState<Course[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [coursesRes, classroomsRes, teachersRes, timeSlotsRes] = await Promise.all([
        courseService.getAll(),
        classroomService.getAll(),
        teacherService.getAll(),
        timeSlotService.getAll(),
      ]);

      setCourses(coursesRes.data);
      setClassrooms(classroomsRes.data);
      setTeachers(teachersRes.data);
      setTimeSlots(timeSlotsRes.data);
      setError(null);
    } catch (err: any) {
      console.error('Error fetching data:', err);
      setError(err.response?.data?.detail || 'Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Gestión de Datos
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="data management tabs">
          <Tab label={`Cursos (${courses.length})`} />
          <Tab label={`Aulas (${classrooms.length})`} />
          <Tab label={`Profesores (${teachers.length})`} />
          <Tab label={`Bloques Horarios (${timeSlots.length})`} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Créditos</TableCell>
                  <TableCell>Tipo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>{course.code}</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>
                      <Chip label={course.course_type} size="small" color="primary" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Capacidad</TableCell>
                  <TableCell>Edificio</TableCell>
                  <TableCell>Piso</TableCell>
                  <TableCell>Tipo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classrooms.map((classroom) => (
                  <TableRow key={classroom.id}>
                    <TableCell>{classroom.code}</TableCell>
                    <TableCell>{classroom.name}</TableCell>
                    <TableCell>{classroom.capacity}</TableCell>
                    <TableCell>{classroom.building}</TableCell>
                    <TableCell>{classroom.floor || 'N/A'}</TableCell>
                    <TableCell>
                      <Chip label={classroom.classroom_type} size="small" color="secondary" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Departamento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow key={teacher.id}>
                    <TableCell>{teacher.code}</TableCell>
                    <TableCell>{`${teacher.first_name} ${teacher.last_name}`}</TableCell>
                    <TableCell>{teacher.email}</TableCell>
                    <TableCell>{teacher.department || 'N/A'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Día</TableCell>
                  <TableCell>Hora Inicio</TableCell>
                  <TableCell>Hora Fin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {timeSlots.map((slot) => (
                  <TableRow key={slot.id}>
                    <TableCell>
                      <Chip label={slot.day_of_week} size="small" />
                    </TableCell>
                    <TableCell>{slot.start_time}</TableCell>
                    <TableCell>{slot.end_time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default DataManagement;
