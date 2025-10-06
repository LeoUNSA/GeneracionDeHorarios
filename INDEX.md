# 📚 Índice de Documentación - Sistema de Generación de Horarios

## 🎯 Inicio Rápido

Si es tu primera vez, empieza aquí:
1. **[README.md](README.md)** - Descripción general del proyecto
2. **[COMPLETADO.md](COMPLETADO.md)** - Estado actual del sistema
3. **[GUIA_PRUEBAS.md](GUIA_PRUEBAS.md)** - Cómo probar que todo funciona

## 📖 Documentación por Tema

### Integración Frontend-Backend
- **[INTEGRACION.md](INTEGRACION.md)** ⭐ **COMPLETO**
  - Arquitectura del sistema
  - Servicios API implementados
  - Componentes integrados
  - Configuración CORS
  - Flujo de datos
  - Solución de problemas

- **[RESUMEN_INTEGRACION.md](RESUMEN_INTEGRACION.md)** 📋 **RESUMEN**
  - Resumen ejecutivo de la integración
  - Checklist de funcionalidades
  - Datos de prueba
  - Próximos pasos

- **[COMPLETADO.md](COMPLETADO.md)** ✅ **ESTADO**
  - Componentes implementados
  - Archivos creados
  - Cómo iniciar el sistema
  - Progreso del proyecto

### Testing y Verificación
- **[GUIA_PRUEBAS.md](GUIA_PRUEBAS.md)** 🧪 **TESTING**
  - Verificar backend
  - Verificar frontend
  - Probar integración
  - Problemas comunes y soluciones

### Backend (Django)
- **[backend/README.md](backend/README.md)** 🔧 **BACKEND**
  - Instalación del backend
  - API Endpoints
  - Modelos de datos
  - Comandos útiles

## 🗂️ Estructura de Archivos

```
GeneracionDeHorarios/
│
├── 📄 README.md                  ← Descripción general
├── 📄 INTEGRACION.md             ← Guía técnica completa ⭐
├── 📄 RESUMEN_INTEGRACION.md     ← Resumen ejecutivo
├── 📄 COMPLETADO.md              ← Estado actual ✅
├── 📄 GUIA_PRUEBAS.md            ← Cómo probar 🧪
├── 📄 INDEX.md                   ← Este archivo 📚
│
├── backend/
│   ├── horarios_api/             ← Configuración Django
│   ├── schedules/                ← App principal
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env                      ← Variables de entorno
│   └── README.md                 ← Doc del backend
│
└── frontend/
    ├── src/
    │   ├── services/
    │   │   └── api.ts            ← Servicios API ⭐
    │   ├── pages/
    │   │   ├── Dashboard.tsx     ← Dashboard integrado
    │   │   ├── DataManagement.tsx ← Gestión de datos (NUEVO)
    │   │   └── DataLoader.tsx
    │   ├── components/
    │   │   └── Layout.tsx
    │   └── App.tsx
    ├── package.json
    └── .env                      ← Variables de entorno
```

## 🎓 Por Rol/Necesidad

### Para Desarrolladores Frontend
1. [INTEGRACION.md](INTEGRACION.md) - Sección "Servicios API Implementados"
2. `frontend/src/services/api.ts` - Código de servicios
3. `frontend/src/pages/Dashboard.tsx` - Ejemplo de integración

### Para Desarrolladores Backend
1. [backend/README.md](backend/README.md) - Documentación del backend
2. `backend/schedules/views.py` - ViewSets
3. `backend/schedules/serializers.py` - Serializers

### Para Testers
1. [GUIA_PRUEBAS.md](GUIA_PRUEBAS.md) - Guía de pruebas completa
2. [COMPLETADO.md](COMPLETADO.md) - Checklist de verificación

### Para Project Managers
1. [COMPLETADO.md](COMPLETADO.md) - Estado del proyecto
2. [RESUMEN_INTEGRACION.md](RESUMEN_INTEGRACION.md) - Resumen ejecutivo
3. [README.md](README.md) - Visión general

## 📊 Estado del Proyecto (Actualizado)

```
Fase 1: Carga de Datos            ✅ 100%
Fase 2: Backend API               ✅ 100%
Integración Frontend-Backend      ✅ 100%
Fase 3: Algoritmo Genético        🔄 0%
Fase 4: Visualización Avanzada    🔄 0%

TOTAL: 50% ███████████░░░░░░░░░
```

## 🔗 Enlaces Útiles

### Aplicación
- Frontend: http://localhost:3001
- Backend API: http://localhost:8000/api
- Admin Django: http://localhost:8000/admin

### Endpoints API
- Cursos: http://localhost:8000/api/courses/
- Aulas: http://localhost:8000/api/classrooms/
- Profesores: http://localhost:8000/api/teachers/
- Bloques Horarios: http://localhost:8000/api/timeslots/
- Horarios: http://localhost:8000/api/schedules/
- Asignaciones: http://localhost:8000/api/assignments/

## 🎯 Próximos Pasos

Para continuar con el desarrollo:

### Fase 3: Algoritmo Genético
1. Instalar DEAP: `pip install deap`
2. Crear módulo GA en `backend/schedules/genetic_algorithm.py`
3. Implementar generación de horarios
4. Crear endpoint `/api/schedules/generate/`
5. Integrar en frontend

### Fase 4: Visualización
1. Instalar FullCalendar: `npm install @fullcalendar/react`
2. Crear componente de calendario
3. Visualizar horarios generados
4. Exportar a PDF/Excel

## 📝 Notas

- Todos los archivos `.md` están en la raíz del proyecto
- La documentación está en español
- El código está comentado en inglés (convención)
- Las APIs siguen REST best practices

## 🆘 Ayuda

Si tienes problemas:
1. Revisa [GUIA_PRUEBAS.md](GUIA_PRUEBAS.md) - Sección "Problemas Comunes"
2. Verifica que ambos servidores están corriendo
3. Revisa la consola del navegador (F12)
4. Verifica logs de Django en la terminal

---

**Última actualización**: Fase de Integración Frontend-Backend completada ✅
