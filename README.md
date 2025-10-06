# Sistema de Generación de Horarios Universitarios

## 📋 Descripción del Proyecto

Sistema completo de generación automática de horarios universitarios utilizando algoritmos genéticos, con frontend React y backend Django REST API completamente integrados.

## 📊 Estado del Proyecto

### ✅ Fase 1: Frontend + Carga de Datos (100%)
- Interface React con TypeScript
- Material-UI para diseño
- Carga de archivos CSV y XML (UniTime)
- Vista previa de datos

### ✅ Fase 2: Backend Django + API REST (100%)
- Django REST Framework API
- Modelos de datos completos
- Endpoints CRUD para todas las entidades
- Base de datos con datos de prueba
- Panel de administración Django

### ✅ Integración Frontend-Backend (100%)
- Servicios API con Axios
- Componentes integrados con backend
- Dashboard con estadísticas reales
- Gestión de datos en tiempo real
- CORS configurado correctamente

### 🔄 Fase 3: Algoritmo Genético (Pendiente)
- Implementación con DEAP
- Optimización multiobjetivo
- Endpoint de generación
- Visualización de progreso

### 🔄 Fase 4: Visualización Avanzada (Pendiente)
- Calendario con FullCalendar.js
- Vistas por profesor/aula
- Exportación PDF/Excel

## 🎯 Pipeline de Datos

### 1. **Entrada de Datos** ✅ (Implementado)
- **Carga de archivos CSV**: Importar datos tabulares de cursos, aulas y profesores
- **Carga de archivos XML**: Soporte para formato UniTime (pu-fal07-cs)
- **Vista previa**: Visualización estructurada de los datos cargados
- **Backend Django**: API REST con todos los modelos de datos
- **Datos de prueba**: 8 cursos, 6 aulas, 6 profesores, 25 bloques horarios

### 2. **Procesamiento** ⏳ (Próximamente)
- Algoritmo genético con DEAP
- Generación de poblaciones iniciales
- Operadores de cruce y mutación
- Evaluación de fitness según conflictos y preferencias

### 3. **Generación del Horario** ⏳ (Próximamente)
- Traducción de soluciones a matriz horario
- Asignación de cursos, aulas y tiempos
- Validación de restricciones duras
- Optimización de restricciones blandas

### 4. **Visualización** ⏳ (Próximamente)
- Interfaz interactiva con FullCalendar.js
- Vistas por profesor, aula o grupo
- Exportación en formatos estándar

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                         │
│                     Puerto: 3001                            │
│  - Dashboard (estadísticas en tiempo real)                  │
│  - DataManagement (gestión de datos)                        │
│  - DataLoader (carga CSV/XML)                              │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  │ HTTP REST API (CORS habilitado)
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                    BACKEND (Django)                         │
│                     Puerto: 8000                            │
│  - Django REST Framework                                    │
│  - 6 Modelos de datos                                      │
│  - Panel de administración                                  │
│  - Datos de prueba precargados                             │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│              BASE DE DATOS (SQLite)                         │
│  - Cursos, Aulas, Profesores                               │
│  - Bloques Horarios, Horarios, Asignaciones                │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Tecnologías

### Frontend (✅ Implementado)
- **React 18**: Framework principal
- **TypeScript**: Tipado estático
- **Material-UI**: Componentes de interfaz
- **Axios**: Cliente HTTP para API
- **PapaParse**: Parser de CSV
- **xml2js**: Parser de XML
- **React Router**: Navegación entre páginas

### Backend (✅ Implementado)
- **Django 5.2.7**: Framework web
- **Django REST Framework 3.16.1**: API REST
- **django-cors-headers**: CORS para frontend
- **SQLite/PostgreSQL**: Base de datos
- **python-decouple**: Variables de entorno

### Algoritmo de Optimización (⏳ Próximamente)
- **Python**: Lenguaje principal
- **DEAP**: Librería de algoritmos genéticos
- **NumPy**: Procesamiento numérico

## � Inicio Rápido

### Prerrequisitos
- Python 3.13+
- Node.js 18+
- npm 9+

### 1. Configurar el Backend

```bash
# Navegar al directorio backend
cd backend

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar base de datos
python manage.py migrate

# Cargar datos de prueba
python manage.py load_sample_data

# Iniciar servidor Django
python manage.py runserver 8000
```

Backend disponible en: http://localhost:8000/api

### 2. Configurar el Frontend

```bash
# En otra terminal, navegar al directorio frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor React
PORT=3001 npm start
```

Frontend disponible en: http://localhost:3001

### 3. Acceder a la Aplicación

- **Frontend**: http://localhost:3001
  - Dashboard con estadísticas
  - Gestión de datos (Cursos, Aulas, Profesores, Bloques Horarios)
  - Carga de archivos CSV/XML

- **Backend API**: http://localhost:8000/api
  - `/api/courses/` - Cursos
  - `/api/classrooms/` - Aulas
  - `/api/teachers/` - Profesores
  - `/api/timeslots/` - Bloques Horarios
  - `/api/schedules/` - Horarios
  - `/api/assignments/` - Asignaciones

- **Admin Django**: http://localhost:8000/admin

### Requisitos Previos
- Node.js 16+ y npm
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/LeoUNSA/GeneracionDeHorarios.git
cd GeneracionDeHorarios
```

2. **Instalar dependencias del frontend**
```bash
cd frontend
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📊 Dataset de Prueba

El proyecto incluye el dataset **UniTime pu-fal07-cs (XML)** ubicado en:
- `/pu-fal07-cs.xml`

### Cómo Probar el Sistema

1. Accede a la aplicación en `http://localhost:3000`
2. Navega a **"Cargar Datos"** en el menú lateral
3. Selecciona la pestaña **"Cargar XML (UniTime)"**
4. Arrastra y suelta el archivo `pu-fal07-cs.xml` o haz clic para seleccionarlo
5. Visualiza la estructura de datos cargados en la vista previa

## 📁 Estructura del Proyecto

```
GeneracionDeHorarios/
├── frontend/                    # Aplicación React
│   ├── src/
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── Layout.tsx      # Layout principal con navegación
│   │   │   ├── FileUploadZone.tsx  # Zona de carga de archivos
│   │   │   └── DataPreview.tsx     # Vista previa de datos
│   │   ├── pages/              # Páginas principales
│   │   │   ├── Dashboard.tsx   # Dashboard con estadísticas
│   │   │   └── DataLoader.tsx  # Carga de datos
│   │   ├── App.tsx             # Componente principal
│   │   └── index.tsx           # Punto de entrada
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
├── pu-fal07-cs.xml             # Dataset de prueba UniTime
└── README.md                   # Este archivo
```

## 🎨 Características Implementadas

### Dashboard
- ✅ Tarjetas de estadísticas (cursos, aulas, profesores, horarios)
- ✅ Información general del sistema
- ✅ Diseño responsivo con Material-UI

### Carga de Datos
- ✅ **Drag & Drop**: Interfaz intuitiva para arrastrar archivos
- ✅ **Carga CSV**: Parser con vista previa en tabla
- ✅ **Carga XML**: Parser para archivos UniTime con vista jerárquica
- ✅ **Vista Previa**: Visualización estructurada de datos cargados
- ✅ **Manejo de Errores**: Validación y mensajes informativos

## 📝 Formatos de Datos Soportados

### CSV (Comma Separated Values)
```csv
codigo,nombre,creditos,tipo
CS101,Algoritmos,4,Obligatorio
CS102,Estructuras de Datos,4,Obligatorio
CS201,Base de Datos,3,Electivo
```

### XML (UniTime Format)
```xml
<?xml version="1.0"?>
<dataset>
  <courses>
    <course id="1" code="CS101" name="Algoritmos"/>
    <course id="2" code="CS102" name="Estructuras de Datos"/>
  </courses>
  <classrooms>
    <classroom id="1" code="A-101" capacity="30"/>
  </classrooms>
</dataset>
```

## 🚀 Próximos Pasos

### Fase 2: Backend y Procesamiento
- [ ] Configurar Django + PostgreSQL
- [ ] Implementar API REST con DRF
- [ ] Sistema de autenticación JWT
- [ ] Almacenamiento persistente de datos

### Fase 3: Algoritmo Genético
- [ ] Implementar DEAP para optimización
- [ ] Definir funciones de fitness
- [ ] Operadores genéticos (cruce, mutación, selección)
- [ ] Manejo de restricciones duras y blandas

### Fase 4: Visualización Avanzada
- [ ] Integrar FullCalendar.js
- [ ] Vistas por entidad (profesor, aula, grupo)
- [ ] Exportación a PDF/Excel
- [ ] Edición manual de horarios

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autor

**LeoUNSA** - [GitHub Profile](https://github.com/LeoUNSA)

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!
