# 🚀 Guía Rápida de Inicio

## ¡Bienvenido al Sistema de Generación de Horarios!

Esta guía te ayudará a poner en marcha el prototipo frontend en menos de 5 minutos.

## ⚡ Inicio Rápido

### Paso 1: Instalación
```bash
cd frontend
npm install
```

### Paso 2: Ejecutar
```bash
npm start
```

### Paso 3: Abrir Navegador
Abre http://localhost:3000 en tu navegador preferido.

## 🎯 Funcionalidades Actuales

### 1. Dashboard
- Visualiza estadísticas generales del sistema
- Información sobre cursos, aulas, profesores y horarios
- Diseño moderno y responsivo

### 2. Carga de Datos

#### Opción A: Cargar archivo CSV
1. Ve a "Cargar Datos" en el menú lateral
2. Selecciona la pestaña "Cargar CSV"
3. Arrastra el archivo `ejemplo-cursos.csv` o haz clic para seleccionarlo
4. Observa la vista previa en formato tabla

#### Opción B: Cargar archivo XML (UniTime)
1. Ve a "Cargar Datos" en el menú lateral
2. Selecciona la pestaña "Cargar XML (UniTime)"
3. Arrastra el archivo `pu-fal07-cs.xml` o haz clic para seleccionarlo
4. Explora la estructura jerárquica del dataset

## 📂 Archivos de Prueba Incluidos

### `ejemplo-cursos.csv`
Archivo CSV de ejemplo con 12 cursos que incluyen:
- Código del curso
- Nombre
- Créditos
- Tipo (Obligatorio/Electivo)
- Profesor asignado
- Aula
- Horario
- Días de la semana

### `pu-fal07-cs.xml`
Dataset oficial de UniTime utilizado para pruebas académicas. Contiene:
- Información completa de cursos
- Aulas y capacidades
- Profesores y disponibilidad
- Restricciones del sistema

## 🎨 Características del Prototipo

### Interfaz de Usuario
- ✅ Navegación lateral intuitiva
- ✅ Diseño Material-UI moderno
- ✅ Responsivo para móviles y escritorio
- ✅ Tema personalizable

### Carga de Archivos
- ✅ Drag & Drop (Arrastrar y soltar)
- ✅ Selección de archivos con diálogo
- ✅ Indicador de carga
- ✅ Manejo de errores

### Vista Previa de Datos
- ✅ Tabla para archivos CSV
- ✅ Vista jerárquica para XML
- ✅ Información del archivo cargado
- ✅ Contador de registros

## 🔧 Solución de Problemas

### El puerto 3000 está ocupado
```bash
PORT=3001 npm start
```

### Errores de instalación
```bash
rm -rf node_modules package-lock.json
npm install
```

### La aplicación no carga
1. Verifica que Node.js esté instalado: `node --version`
2. Limpia la caché de npm: `npm cache clean --force`
3. Reinstala las dependencias

## 📝 Próximos Pasos

Una vez que hayas explorado el prototipo, estos serán los próximos desarrollos:

1. **Backend Django**
   - API REST para persistencia de datos
   - Base de datos PostgreSQL
   - Autenticación JWT

2. **Algoritmo Genético**
   - Implementación con DEAP
   - Optimización de horarios
   - Manejo de restricciones

3. **Visualización Avanzada**
   - Integración con FullCalendar.js
   - Vistas por entidad
   - Exportación de resultados

## 💡 Consejos

- **Prueba ambos formatos**: CSV es más simple, XML tiene estructura compleja
- **Explora la navegación**: Usa el menú lateral para cambiar entre vistas
- **Observa los detalles**: La vista previa muestra la estructura completa de los datos

## 🐛 Reportar Problemas

Si encuentras algún error o tienes sugerencias:
1. Abre un issue en GitHub
2. Describe el problema con capturas de pantalla
3. Incluye los pasos para reproducirlo

## ✨ ¡Disfruta del Prototipo!

Este es solo el comienzo de un sistema completo de generación de horarios. 
Explora, experimenta y espera las próximas actualizaciones.

---
**Última actualización**: Octubre 2025
