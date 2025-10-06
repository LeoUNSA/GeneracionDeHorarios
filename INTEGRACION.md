# 🔗 Integración Frontend-Backend

## Estado: ✅ COMPLETADO

La integración entre el frontend React y el backend Django REST API está completamente implementada y funcionando.

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + TypeScript)            │
│                     Puerto: 3001                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Components:                                         │   │
│  │  - Dashboard (muestra estadísticas del backend)      │   │
│  │  - DataManagement (gestiona datos del backend)       │   │
│  │  - DataLoader (carga archivos CSV/XML)              │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Services API (axios):                               │   │
│  │  - courseService                                     │   │
│  │  - classroomService                                  │   │
│  │  - teacherService                                    │   │
│  │  - timeSlotService                                   │   │
│  │  - scheduleService                                   │   │
│  │  - assignmentService                                 │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP REST API
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  BACKEND (Django REST Framework)            │
│                     Puerto: 8000                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  API Endpoints:                                      │   │
│  │  - /api/courses/         (CRUD Cursos)              │   │
│  │  - /api/classrooms/      (CRUD Aulas)               │   │
│  │  - /api/teachers/        (CRUD Profesores)          │   │
│  │  - /api/timeslots/       (CRUD Bloques Horarios)    │   │
│  │  - /api/schedules/       (CRUD Horarios)            │   │
│  │  - /api/assignments/     (CRUD Asignaciones)        │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Django Models:                                      │   │
│  │  - Course, Classroom, Teacher                        │   │
│  │  - TimeSlot, Schedule, ScheduleAssignment            │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Database: SQLite (db.sqlite3)                       │   │
│  │  - 8 cursos de prueba                                │   │
│  │  - 6 aulas de prueba                                 │   │
│  │  - 6 profesores de prueba                            │   │
│  │  - 25 bloques horarios (Lun-Vie, 08:00-17:10)       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 📋 Servicios API Implementados

### 1. Course Service (Cursos)
```typescript
courseService.getAll()      // GET /api/courses/
courseService.getById(id)   // GET /api/courses/{id}/
courseService.create(data)  // POST /api/courses/
courseService.update(id, data) // PUT /api/courses/{id}/
courseService.delete(id)    // DELETE /api/courses/{id}/
```

### 2. Classroom Service (Aulas)
```typescript
classroomService.getAll()      // GET /api/classrooms/
classroomService.getById(id)   // GET /api/classrooms/{id}/
classroomService.create(data)  // POST /api/classrooms/
classroomService.update(id, data) // PUT /api/classrooms/{id}/
classroomService.delete(id)    // DELETE /api/classrooms/{id}/
```

### 3. Teacher Service (Profesores)
```typescript
teacherService.getAll()      // GET /api/teachers/
teacherService.getById(id)   // GET /api/teachers/{id}/
teacherService.create(data)  // POST /api/teachers/
teacherService.update(id, data) // PUT /api/teachers/{id}/
teacherService.delete(id)    // DELETE /api/teachers/{id}/
```

### 4. TimeSlot Service (Bloques Horarios)
```typescript
timeSlotService.getAll()      // GET /api/timeslots/
timeSlotService.getById(id)   // GET /api/timeslots/{id}/
timeSlotService.create(data)  // POST /api/timeslots/
timeSlotService.update(id, data) // PUT /api/timeslots/{id}/
timeSlotService.delete(id)    // DELETE /api/timeslots/{id}/
```

### 5. Schedule Service (Horarios)
```typescript
scheduleService.getAll()       // GET /api/schedules/
scheduleService.getById(id)    // GET /api/schedules/{id}/
scheduleService.create(data)   // POST /api/schedules/
scheduleService.update(id, data) // PUT /api/schedules/{id}/
scheduleService.delete(id)     // DELETE /api/schedules/{id}/
scheduleService.activate(id)   // POST /api/schedules/{id}/activate/
scheduleService.getActive()    // GET /api/schedules/active/
```

## 🎯 Componentes Actualizados

### Dashboard (Integrado ✅)
- **Ubicación**: `frontend/src/pages/Dashboard.tsx`
- **Funcionalidad**: Muestra estadísticas en tiempo real del backend
- **Datos mostrados**:
  - Número total de cursos
  - Número total de aulas
  - Número total de profesores
  - Número total de horarios generados
- **Características**:
  - Loading state con CircularProgress
  - Manejo de errores con Alert
  - Actualización automática al cargar la página

### DataManagement (Nueva página ✅)
- **Ubicación**: `frontend/src/pages/DataManagement.tsx`
- **Funcionalidad**: Visualización de todos los datos del backend
- **Pestañas**:
  1. **Cursos**: Tabla con código, nombre, créditos y tipo
  2. **Aulas**: Tabla con código, nombre, capacidad, edificio, piso y tipo
  3. **Profesores**: Tabla con código, nombre completo, email y departamento
  4. **Bloques Horarios**: Tabla con día, hora inicio y hora fin
- **Características**:
  - Diseño tabular con Material-UI Tables
  - Chips para categorías y tipos
  - Contadores en cada pestaña
  - Loading y error states

## 🔧 Configuración

### Variables de Entorno

**Frontend** (`frontend/.env`):
```env
REACT_APP_API_URL=http://localhost:8000/api
```

**Backend** (`backend/.env`):
```env
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://127.0.0.1:3001
```

### CORS Configuration
El backend está configurado para aceptar peticiones del frontend:
- **Origen permitido**: `http://localhost:3001`
- **Middleware**: `django-cors-headers`
- **Configuración**: `backend/horarios_api/settings.py`

## 🚀 Cómo Ejecutar

### 1. Iniciar el Backend (Terminal 1)
```bash
cd backend
source venv/bin/activate  # En Windows: venv\Scripts\activate
python manage.py runserver 8000
```

### 2. Iniciar el Frontend (Terminal 2)
```bash
cd frontend
PORT=3001 npm start
```

### 3. Acceder a la Aplicación
- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:8000/api
- **Admin Django**: http://localhost:8000/admin

## 📊 Datos de Prueba

El backend incluye datos de prueba cargados automáticamente:

### Cursos (8)
- CS101: Introduction to Programming
- CS201: Data Structures
- CS301: Algorithms
- CS302: Database Systems
- MATH101: Calculus I
- MATH102: Linear Algebra
- PHYS101: Physics I

### Aulas (6)
- A101: Aula Teórica (50 personas)
- A102: Aula Teórica (45 personas)
- A201: Aula Teórica (60 personas)
- LAB1: Laboratorio de Computación (30 personas)
- LAB2: Laboratorio de Física (25 personas)
- AUD1: Auditorio (120 personas)

### Profesores (6)
- Dr. Juan Pérez (Ciencias de la Computación)
- Dra. María García (Matemáticas)
- Dr. Carlos López (Física)
- Dr. Ana Martínez (Ciencias de la Computación)
- Dr. Luis Rodríguez (Matemáticas)
- Dra. Carmen Sánchez (Física)

### Bloques Horarios (25)
- Lunes a Viernes
- Horarios: 08:00-09:50, 10:00-11:50, 12:00-13:50, 14:00-15:50, 16:00-17:50

## 🧪 Testing de la Integración

### Test Manual
1. Abre el Dashboard → deberías ver las estadísticas con números reales
2. Ve a "Gestión de Datos" → deberías ver los datos en tablas
3. Abre las DevTools del navegador (F12) → pestaña Network
4. Recarga la página → verifica que se hacen peticiones a `http://localhost:8000/api`
5. Verifica que las respuestas son 200 OK

### Verificar Endpoints
```bash
# Cursos
curl http://localhost:8000/api/courses/

# Aulas
curl http://localhost:8000/api/classrooms/

# Profesores
curl http://localhost:8000/api/teachers/

# Bloques Horarios
curl http://localhost:8000/api/timeslots/
```

## 🔄 Flujo de Datos

```
Usuario → Dashboard → useEffect() → courseService.getAll()
                                  → classroomService.getAll()
                                  → teacherService.getAll()
                                  → scheduleService.getAll()
                                          ↓
                                    axios.get('/api/...')
                                          ↓
                                    Django ViewSet
                                          ↓
                                    Serializer
                                          ↓
                                    Database Query
                                          ↓
                                    JSON Response
                                          ↓
                                    setState(data)
                                          ↓
                                    UI Update
```

## 📝 Próximos Pasos

### Fase 3: Algoritmo Genético (Pendiente)
- [ ] Implementar algoritmo genético en Python (DEAP)
- [ ] Crear endpoint `/api/schedules/generate/`
- [ ] Integrar generación en el frontend
- [ ] Visualización de progreso del algoritmo

### Fase 4: Visualización (Pendiente)
- [ ] Componente de calendario con FullCalendar.js
- [ ] Vista de horarios por profesor
- [ ] Vista de horarios por aula
- [ ] Exportación a PDF/Excel

## ✅ Checklist de Integración

- [x] Configurar CORS en Django
- [x] Crear servicios API con Axios
- [x] Definir interfaces TypeScript
- [x] Actualizar Dashboard con datos reales
- [x] Crear página de Gestión de Datos
- [x] Configurar variables de entorno
- [x] Testing manual de endpoints
- [x] Documentación de integración
- [ ] Testing automatizado
- [ ] Manejo avanzado de errores
- [ ] Paginación de datos

## 🐛 Solución de Problemas

### Error: CORS blocked
**Solución**: Verificar que `django-cors-headers` está instalado y configurado en `settings.py`

### Error: Connection refused
**Solución**: Asegurarse que el backend Django está corriendo en puerto 8000

### Error: Module not found
**Solución**: Ejecutar `npm install` en el directorio frontend

### Error: axios is not defined
**Solución**: Verificar que axios está instalado: `npm install axios`

## 📚 Referencias

- [Django REST Framework](https://www.django-rest-framework.org/)
- [Axios Documentation](https://axios-http.com/)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)
- [Material-UI](https://mui.com/)
