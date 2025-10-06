# Backend API - Sistema de Generación de Horarios

API REST desarrollada con Django y Django REST Framework para gestionar horarios universitarios.

## 🚀 Tecnologías

- **Python 3.13**
- **Django 5.2.7**
- **Django REST Framework 3.16.1**
- **PostgreSQL** (opcional, usa SQLite por defecto)
- **django-cors-headers** para CORS

## 📋 Prerrequisitos

- Python 3.8 o superior
- pip
- virtualenv (recomendado)
- PostgreSQL (opcional)

## 🔧 Instalación

### 1. Crear entorno virtual

```bash
python3 -m venv venv
source venv/bin/activate  # En Linux/Mac
# venv\Scripts\activate  # En Windows
```

### 2. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y edítalo según tus necesidades:

```bash
cp .env.example .env
```

### 4. Ejecutar migraciones

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Cargar datos de prueba (opcional)

```bash
python manage.py load_sample_data
```

### 6. Crear superusuario

```bash
python manage.py createsuperuser
```

### 7. Iniciar servidor de desarrollo

```bash
python manage.py runserver 8000
```

El servidor estará disponible en `http://localhost:8000`

## 📡 Endpoints API

### Cursos
- `GET /api/courses/` - Listar todos los cursos
- `POST /api/courses/` - Crear un nuevo curso
- `GET /api/courses/{id}/` - Obtener detalles de un curso
- `PUT /api/courses/{id}/` - Actualizar un curso
- `DELETE /api/courses/{id}/` - Eliminar un curso

### Aulas
- `GET /api/classrooms/` - Listar todas las aulas
- `POST /api/classrooms/` - Crear una nueva aula
- `GET /api/classrooms/{id}/` - Obtener detalles de un aula
- `PUT /api/classrooms/{id}/` - Actualizar un aula
- `DELETE /api/classrooms/{id}/` - Eliminar un aula

### Profesores
- `GET /api/teachers/` - Listar todos los profesores
- `POST /api/teachers/` - Crear un nuevo profesor
- `GET /api/teachers/{id}/` - Obtener detalles de un profesor
- `PUT /api/teachers/{id}/` - Actualizar un profesor
- `DELETE /api/teachers/{id}/` - Eliminar un profesor

### Bloques Horarios
- `GET /api/timeslots/` - Listar todos los bloques horarios
- `POST /api/timeslots/` - Crear un nuevo bloque horario
- `GET /api/timeslots/{id}/` - Obtener detalles de un bloque
- `PUT /api/timeslots/{id}/` - Actualizar un bloque
- `DELETE /api/timeslots/{id}/` - Eliminar un bloque

### Horarios
- `GET /api/schedules/` - Listar todos los horarios
- `POST /api/schedules/` - Crear un nuevo horario
- `GET /api/schedules/{id}/` - Obtener detalles de un horario
- `PUT /api/schedules/{id}/` - Actualizar un horario
- `DELETE /api/schedules/{id}/` - Eliminar un horario
- `POST /api/schedules/{id}/activate/` - Activar un horario
- `GET /api/schedules/active/` - Obtener el horario activo

### Asignaciones
- `GET /api/assignments/` - Listar todas las asignaciones
- `POST /api/assignments/` - Crear una nueva asignación
- `GET /api/assignments/{id}/` - Obtener detalles de una asignación
- `PUT /api/assignments/{id}/` - Actualizar una asignación
- `DELETE /api/assignments/{id}/` - Eliminar una asignación

## 🔐 Panel de Administración

Accede al panel de administración de Django en `http://localhost:8000/admin/`

Usa las credenciales del superusuario que creaste.

## 📊 Modelos de Datos

### Course (Curso)
- `code`: Código del curso (único)
- `name`: Nombre del curso
- `credits`: Número de créditos
- `course_type`: Tipo (obligatoria/electiva)

### Classroom (Aula)
- `code`: Código del aula (único)
- `name`: Nombre del aula
- `capacity`: Capacidad de estudiantes
- `building`: Edificio
- `floor`: Piso
- `classroom_type`: Tipo de aula

### Teacher (Profesor)
- `code`: Código del profesor (único)
- `first_name`: Nombres
- `last_name`: Apellidos
- `email`: Correo electrónico (único)
- `department`: Departamento

### TimeSlot (Bloque Horario)
- `day_of_week`: Día de la semana
- `start_time`: Hora de inicio
- `end_time`: Hora de fin

### Schedule (Horario)
- `name`: Nombre del horario
- `semester`: Semestre
- `year`: Año
- `is_active`: Si está activo
- `fitness_score`: Puntuación de aptitud

### ScheduleAssignment (Asignación)
- `schedule`: Horario al que pertenece
- `course`: Curso asignado
- `teacher`: Profesor asignado
- `classroom`: Aula asignada
- `time_slot`: Bloque horario asignado

## 🧪 Pruebas

```bash
python manage.py test
```

## 📝 Comandos Útiles

```bash
# Crear datos de prueba
python manage.py load_sample_data

# Reiniciar base de datos
python manage.py flush

# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser
```

## 🔧 Configuración con PostgreSQL

Para usar PostgreSQL en lugar de SQLite, edita el archivo `.env`:

```env
DB_ENGINE=django.db.backends.postgresql
DB_NAME=horarios_db
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
```

## 📄 Licencia

Este proyecto es parte del Sistema de Generación de Horarios Universitarios.
