#!/usr/bin/env fish

# Script para iniciar el sistema completo
# Frontend (React) en puerto 3001
# Backend (Django) en puerto 8000

echo "🚀 Iniciando Sistema de Generación de Horarios"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Colores
set GREEN '\033[0;32m'
set BLUE '\033[0;34m'
set NC '\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if not test -d "backend" -o -d "frontend"
    echo "❌ Error: Este script debe ejecutarse desde el directorio raíz del proyecto"
    exit 1
end

# Función para iniciar el backend
function start_backend
    echo "$BLUE[Backend]$NC Iniciando servidor Django en puerto 8000..."
    cd backend
    source venv/bin/activate.fish
    python manage.py runserver 8000 &
    set backend_pid $last_pid
    cd ..
    echo "$GREEN[Backend]$NC ✅ Servidor Django iniciado (PID: $backend_pid)"
end

# Función para iniciar el frontend
function start_frontend
    echo "$BLUE[Frontend]$NC Iniciando servidor React en puerto 3001..."
    cd frontend
    set -x PORT 3001
    npm start &
    set frontend_pid $last_pid
    cd ..
    echo "$GREEN[Frontend]$NC ✅ Servidor React iniciado (PID: $frontend_pid)"
end

# Iniciar servicios
start_backend
sleep 2
start_frontend

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Sistema iniciado correctamente"
echo ""
echo "📊 URLs disponibles:"
echo "   Frontend:     http://localhost:3001"
echo "   Backend API:  http://localhost:8000/api"
echo "   Django Admin: http://localhost:8000/admin"
echo ""
echo "Para detener el sistema, presiona Ctrl+C"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Esperar a que el usuario presione Ctrl+C
wait
