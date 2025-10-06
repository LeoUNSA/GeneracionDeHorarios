import axios from 'axios';

// Configuración base de Axios
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interfaces para los tipos de datos
export interface Course {
  id?: number;
  code: string;
  name: string;
  credits: number;
  course_type: string;
  created_at?: string;
  updated_at?: string;
}

export interface Classroom {
  id?: number;
  code: string;
  name: string;
  capacity: number;
  building: string;
  floor?: number;
  classroom_type: string;
  created_at?: string;
  updated_at?: string;
}

export interface Teacher {
  id?: number;
  code: string;
  first_name: string;
  last_name: string;
  email: string;
  department?: string;
  created_at?: string;
  updated_at?: string;
}

export interface TimeSlot {
  id?: number;
  day_of_week: string;
  start_time: string;
  end_time: string;
  created_at?: string;
  updated_at?: string;
}

export interface ScheduleAssignment {
  id?: number;
  schedule?: number;
  course: number | Course;
  teacher: number | Teacher;
  classroom: number | Classroom;
  time_slot: number | TimeSlot;
  created_at?: string;
  updated_at?: string;
}

export interface Schedule {
  id?: number;
  name: string;
  semester: string;
  year: number;
  is_active: boolean;
  fitness_score?: number;
  assignments?: ScheduleAssignment[];
  created_at?: string;
  updated_at?: string;
}

// Servicios API para Cursos
export const courseService = {
  getAll: () => api.get<Course[]>('/courses/'),
  getById: (id: number) => api.get<Course>(`/courses/${id}/`),
  create: (data: Course) => api.post<Course>('/courses/', data),
  update: (id: number, data: Course) => api.put<Course>(`/courses/${id}/`, data),
  delete: (id: number) => api.delete(`/courses/${id}/`),
};

// Servicios API para Aulas
export const classroomService = {
  getAll: () => api.get<Classroom[]>('/classrooms/'),
  getById: (id: number) => api.get<Classroom>(`/classrooms/${id}/`),
  create: (data: Classroom) => api.post<Classroom>('/classrooms/', data),
  update: (id: number, data: Classroom) => api.put<Classroom>(`/classrooms/${id}/`, data),
  delete: (id: number) => api.delete(`/classrooms/${id}/`),
};

// Servicios API para Profesores
export const teacherService = {
  getAll: () => api.get<Teacher[]>('/teachers/'),
  getById: (id: number) => api.get<Teacher>(`/teachers/${id}/`),
  create: (data: Teacher) => api.post<Teacher>('/teachers/', data),
  update: (id: number, data: Teacher) => api.put<Teacher>(`/teachers/${id}/`, data),
  delete: (id: number) => api.delete(`/teachers/${id}/`),
};

// Servicios API para Bloques Horarios
export const timeSlotService = {
  getAll: () => api.get<TimeSlot[]>('/timeslots/'),
  getById: (id: number) => api.get<TimeSlot>(`/timeslots/${id}/`),
  create: (data: TimeSlot) => api.post<TimeSlot>('/timeslots/', data),
  update: (id: number, data: TimeSlot) => api.put<TimeSlot>(`/timeslots/${id}/`, data),
  delete: (id: number) => api.delete(`/timeslots/${id}/`),
};

// Servicios API para Horarios
export const scheduleService = {
  getAll: () => api.get<Schedule[]>('/schedules/'),
  getById: (id: number) => api.get<Schedule>(`/schedules/${id}/`),
  create: (data: Schedule) => api.post<Schedule>('/schedules/', data),
  update: (id: number, data: Schedule) => api.put<Schedule>(`/schedules/${id}/`, data),
  delete: (id: number) => api.delete(`/schedules/${id}/`),
  activate: (id: number) => api.post(`/schedules/${id}/activate/`),
  getActive: () => api.get<Schedule>('/schedules/active/'),
};

// Servicios API para Asignaciones de Horario
export const assignmentService = {
  getAll: () => api.get<ScheduleAssignment[]>('/assignments/'),
  getById: (id: number) => api.get<ScheduleAssignment>(`/assignments/${id}/`),
  create: (data: ScheduleAssignment) => api.post<ScheduleAssignment>('/assignments/', data),
  update: (id: number, data: ScheduleAssignment) => api.put<ScheduleAssignment>(`/assignments/${id}/`, data),
  delete: (id: number) => api.delete(`/assignments/${id}/`),
};

export default api;
