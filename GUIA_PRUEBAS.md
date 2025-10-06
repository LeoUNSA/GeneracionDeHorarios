# 🧪 Guía de Pruebas - Integración Frontend-Backend

## ✅ Verificar que todo está funcionando

### 1. Verificar el Backend Django

**Terminal 1: Iniciar Backend**
```bash
cd /home/leo/GeneracionDeHorarios/backend
source venv/bin/activate.fish  # o venv/bin/activate en bash
python manage.py runserver 8000
```

**Deberías ver:**
```
Watching for file changes with StatReloader
Performing system checks...
System check identified no issues (0 silenced).
October 06, 2025 - 18:XX:XX
Django version 5.2.7, using settings 'horarios_api.settings'
Starting development server at http://127.0.0.1:8000/
```

**Probar API (en otra terminal):**
```bash
# Listar cursos
curl http://localhost:8000/api/courses/

# Deberías ver 8 cursos en formato JSON
```

### 2. Verificar el Frontend React

**Terminal 2: Iniciar Frontend**
```bash
cd /home/leo/GeneracionDeHorarios/frontend
PORT=3001 npm start
```

**Deberías ver:**
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3001
  On Your Network:  http://192.168.x.x:3001
```

### 3. Probar la Integración en el Navegador

#### A. Dashboard (Estadísticas en Tiempo Real)

1. Abre http://localhost:3001
2. Deberías ver:
   ```
   Dashboard - Sistema de Generación de Horarios
   
   [Cursos: 8]  [Aulas: 6]  [Profesores: 6]  [Horarios: 0]
   ```
3. Si ves números diferentes de cero en Cursos, Aulas y Profesores, ¡la integración funciona! ✅

#### B. Gestión de Datos

1. Haz clic en "Gestión de Datos" en el menú lateral
2. Verifica cada pestaña:

**Pestaña Cursos (8):**
- CS101: Introduction to Programming
- CS201: Data Structures
- CS301: Algorithms
- CS302: Database Systems
- MATH101: Calculus I
- MATH102: Linear Algebra
- PHYS101: Physics I

**Pestaña Aulas (6):**
- A101: Aula Teórica (50 personas)
- A102: Aula Teórica (45 personas)
- A201: Aula Teórica (60 personas)
- LAB1: Laboratorio (30 personas)
- LAB2: Laboratorio (25 personas)
- AUD1: Auditorio (120 personas)

**Pestaña Profesores (6):**
- T001: Dr. Juan Pérez
- T002: Dra. María García
- T003: Dr. Carlos López
- T004: Dr. Ana Martínez
- T005: Dr. Luis Rodríguez
- T006: Dra. Carmen Sánchez

**Pestaña Bloques Horarios (25):**
- Lunes-Viernes, 5 bloques diarios
- 08:00-09:50, 10:00-11:50, 12:00-13:50, 14:00-15:50, 16:00-17:50

### 4. Verificar Peticiones en DevTools

1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Recarga la página (F5)
4. Deberías ver peticiones a:
   ```
   http://localhost:8000/api/courses/     [Status: 200]
   http://localhost:8000/api/classrooms/  [Status: 200]
   http://localhost:8000/api/teachers/    [Status: 200]
   http://localhost:8000/api/schedules/   [Status: 200]
   ```

### 5. Verificar CORS

Si CORS está bien configurado, NO deberías ver errores como:
```
❌ Access to XMLHttpRequest at 'http://localhost:8000/api/...' 
   from origin 'http://localhost:3001' has been blocked by CORS policy
```

Si ves esto, verifica:
1. `backend/.env` tiene: `CORS_ALLOWED_ORIGINS=http://localhost:3001`
2. `django-cors-headers` está en `INSTALLED_APPS`
3. `CorsMiddleware` está en `MIDDLEWARE`

### 6. Probar Manejo de Errores

**Detener el Backend:**
1. En la terminal del backend, presiona Ctrl+C
2. Recarga el frontend (F5)
3. Deberías ver un mensaje de error en el Dashboard

**Reiniciar el Backend:**
1. `python manage.py runserver 8000`
2. Recarga el frontend
3. Los datos deberían cargar nuevamente

## 🔍 Puntos de Verificación

### ✅ Backend Funcionando
- [ ] Servidor Django en puerto 8000
- [ ] Sin errores en la consola
- [ ] API responde en `/api/courses/`
- [ ] Datos de prueba cargados (8 cursos)
- [ ] CORS configurado

### ✅ Frontend Funcionando
- [ ] Servidor React en puerto 3001
- [ ] Sin errores en la consola
- [ ] Página carga correctamente
- [ ] Dashboard visible

### ✅ Integración Funcionando
- [ ] Dashboard muestra estadísticas reales
- [ ] Números: 8 cursos, 6 aulas, 6 profesores
- [ ] Gestión de Datos muestra tablas con datos
- [ ] No hay errores de CORS
- [ ] Peticiones HTTP exitosas (200 OK)
- [ ] Loading states funcionan
- [ ] Error states funcionan

## 🐛 Problemas Comunes

### Problema: "Cannot GET /api/courses/"
**Causa**: Backend no está corriendo  
**Solución**: Iniciar Django en puerto 8000

### Problema: "Network Error"
**Causa**: URL incorrecta o servidor caído  
**Solución**: Verificar que backend está en puerto 8000

### Problema: "CORS Error"
**Causa**: CORS mal configurado  
**Solución**: 
```bash
# backend/.env
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://127.0.0.1:3001
```

### Problema: Dashboard muestra "0" en todo
**Causa**: No hay datos o error de conexión  
**Solución**: 
```bash
cd backend
source venv/bin/activate
python manage.py load_sample_data
```

### Problema: "Module not found: axios"
**Causa**: Axios no instalado  
**Solución**:
```bash
cd frontend
npm install axios
```

## 📊 Resultados Esperados

### Dashboard
```
┌─────────────────────────────────────────────────┐
│  Dashboard - Sistema de Generación de Horarios  │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────┤
│  │ Cursos  │  │ Aulas   │  │Profesor │  │Horar│
│  │    8    │  │    6    │  │    6    │  │  0  │
│  └─────────┘  └─────────┘  └─────────┘  └─────┘
│                                                 │
│  Bienvenido al Sistema...                      │
│  El sistema está conectado al backend Django   │
│  REST API en puerto 8000.                      │
└─────────────────────────────────────────────────┘
```

### Gestión de Datos
```
┌─────────────────────────────────────────────────┐
│  Gestión de Datos                               │
├─────────────────────────────────────────────────┤
│  [Cursos (8)] [Aulas (6)] [Profesores (6)] [...│
├─────────────────────────────────────────────────┤
│  Código │ Nombre                 │ Créditos │..│
│  CS101  │ Introduction to Pro... │    4     │..│
│  CS201  │ Data Structures        │    4     │..│
│  ...    │ ...                    │   ...    │..│
└─────────────────────────────────────────────────┘
```

## ✨ Prueba Exitosa

Si todo lo anterior funciona correctamente:

🎉 **¡La integración está 100% funcional!**

Puedes:
- ✅ Ver datos del backend en el frontend
- ✅ Navegar entre páginas
- ✅ Ver estadísticas en tiempo real
- ✅ Gestionar datos desde el frontend
- ✅ El sistema está listo para la Fase 3 (Algoritmo Genético)

## 📚 Siguiente Paso

Lee los siguientes documentos:
- `INTEGRACION.md` - Documentación detallada
- `RESUMEN_INTEGRACION.md` - Resumen ejecutivo
- `README.md` - Documentación general

Para implementar el Algoritmo Genético, consulta la sección "Fase 3" en cualquiera de estos documentos.
