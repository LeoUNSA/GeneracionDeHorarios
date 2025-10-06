# Sistema de Generación de Horarios Universitarios

## 📋 Descripción

Sistema de generación automática de horarios universitarios utilizando algoritmos genéticos. Este prototipo se enfoca en la carga y visualización de datos institucionales.

## 🚀 Pipeline de Datos

### 1. **Entrada de Datos** (Implementado)
- ✅ Carga de archivos CSV
- ✅ Carga de archivos XML (formato UniTime)
- ⏳ Entrada manual de datos

### 2. **Procesamiento** (Próximamente)
- Algoritmo genético adaptado
- Operadores de cruce y mutación
- Evaluación de fitness

### 3. **Generación de Horarios** (Próximamente)
- Matriz de asignación
- Validación de restricciones
- Optimización

### 4. **Visualización** (Próximamente)
- Interfaz con FullCalendar.js
- Vistas por profesor/aula/grupo
- Exportación de resultados

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript, Material-UI
- **Carga de Datos**: PapaParse (CSV), xml2js (XML)
- **Backend** (próximamente): Django, PostgreSQL, JWT
- **Algoritmo** (próximamente): Python + DEAP

## 📦 Instalación

### Requisitos Previos
- Node.js 16+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repo-url>
cd GeneracionDeHorarios
```

2. **Instalar dependencias**
```bash
cd frontend
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

4. **Abrir el navegador**
```
http://localhost:3000
```

## 📊 Dataset de Prueba

El sistema soporta el dataset **UniTime pu-fal07-cs (XML)** ubicado en la raíz del proyecto:
- `pu-fal07-cs.xml`

### Cómo Probar

1. Navega a "Cargar Datos" en el menú lateral
2. Selecciona la pestaña "Cargar XML (UniTime)"
3. Arrastra y suelta el archivo `pu-fal07-cs.xml`
4. Visualiza la estructura de datos cargados

## 📁 Estructura del Proyecto

```
GeneracionDeHorarios/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.tsx          # Layout principal con navegación
│   │   │   ├── FileUploadZone.tsx  # Zona de carga de archivos
│   │   │   └── DataPreview.tsx     # Vista previa de datos
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx       # Página principal
│   │   │   └── DataLoader.tsx      # Página de carga de datos
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
└── pu-fal07-cs.xml                 # Dataset de prueba
```

## 🎨 Características Implementadas

### Dashboard
- Tarjetas de estadísticas (cursos, aulas, profesores, horarios)
- Información general del sistema

### Carga de Datos
- **Carga CSV**: Soporte para archivos CSV con vista previa en tabla
- **Carga XML**: Parser para archivos UniTime con vista jerárquica
- **Drag & Drop**: Interfaz intuitiva para arrastrar archivos
- **Vista Previa**: Visualización estructurada de datos cargados

## 📝 Formatos Soportados

### CSV
```csv
curso,aula,profesor,horario
Algoritmos,A-101,Dr. García,Lunes 08:00
Estructuras,B-202,Dra. López,Martes 10:00
```

### XML (UniTime)
```xml
<dataset>
  <courses>
    <course id="1" name="Algoritmos"/>
  </courses>
  <classrooms>
    <classroom id="1" code="A-101"/>
  </classrooms>
</dataset>
```

## 🔄 Próximos Pasos

1. ✅ **Fase 1: Carga de Datos** (Completado)
   - Interface de carga
   - Parsers CSV/XML
   - Vista previa

2. ⏳ **Fase 2: Procesamiento** (Siguiente)
   - Implementar algoritmo genético
   - Backend Django + PostgreSQL
   - API REST

3. ⏳ **Fase 3: Visualización**
   - Integración FullCalendar.js
   - Vistas por entidad
   - Exportación

## 🤝 Contribución

Este es un prototipo en desarrollo. Las contribuciones son bienvenidas.

## 📄 Licencia

MIT License
