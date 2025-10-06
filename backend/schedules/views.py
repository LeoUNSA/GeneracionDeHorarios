from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, Classroom, Teacher, TimeSlot, Schedule, ScheduleAssignment
from .serializers import (
    CourseSerializer, ClassroomSerializer, TeacherSerializer,
    TimeSlotSerializer, ScheduleSerializer, ScheduleListSerializer,
    ScheduleAssignmentSerializer
)


class CourseViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar cursos.
    Proporciona operaciones CRUD completas.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filterset_fields = ['course_type', 'credits']
    search_fields = ['code', 'name']
    ordering_fields = ['code', 'name', 'credits']
    ordering = ['code']


class ClassroomViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar aulas.
    Proporciona operaciones CRUD completas.
    """
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer
    filterset_fields = ['classroom_type', 'building']
    search_fields = ['code', 'name', 'building']
    ordering_fields = ['code', 'name', 'capacity']
    ordering = ['building', 'code']


class TeacherViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar profesores.
    Proporciona operaciones CRUD completas.
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    filterset_fields = ['department']
    search_fields = ['code', 'first_name', 'last_name', 'email']
    ordering_fields = ['code', 'last_name', 'first_name']
    ordering = ['last_name', 'first_name']


class TimeSlotViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar bloques horarios.
    Proporciona operaciones CRUD completas.
    """
    queryset = TimeSlot.objects.all()
    serializer_class = TimeSlotSerializer
    filterset_fields = ['day_of_week']
    ordering_fields = ['day_of_week', 'start_time']
    ordering = ['day_of_week', 'start_time']


class ScheduleViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar horarios.
    Proporciona operaciones CRUD completas más acciones personalizadas.
    """
    queryset = Schedule.objects.all()
    filterset_fields = ['semester', 'year', 'is_active']
    search_fields = ['name']
    ordering_fields = ['name', 'created_at', 'fitness_score']
    ordering = ['-created_at']
    
    def get_serializer_class(self):
        """Usar serializer simplificado para listar, completo para detalles"""
        if self.action == 'list':
            return ScheduleListSerializer
        return ScheduleSerializer
    
    @action(detail=True, methods=['post'])
    def activate(self, request, pk=None):
        """
        Activa un horario y desactiva todos los demás del mismo semestre/año.
        """
        schedule = self.get_object()
        
        # Desactivar otros horarios del mismo periodo
        Schedule.objects.filter(
            semester=schedule.semester,
            year=schedule.year
        ).update(is_active=False)
        
        # Activar este horario
        schedule.is_active = True
        schedule.save()
        
        serializer = self.get_serializer(schedule)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """
        Retorna el horario activo actual.
        """
        active_schedule = Schedule.objects.filter(is_active=True).first()
        if active_schedule:
            serializer = self.get_serializer(active_schedule)
            return Response(serializer.data)
        return Response(
            {'detail': 'No hay ningún horario activo'},
            status=status.HTTP_404_NOT_FOUND
        )


class ScheduleAssignmentViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar asignaciones de horarios.
    Proporciona operaciones CRUD completas.
    """
    queryset = ScheduleAssignment.objects.all()
    serializer_class = ScheduleAssignmentSerializer
    filterset_fields = ['schedule', 'course', 'teacher', 'classroom', 'time_slot']
    ordering_fields = ['created_at']
    ordering = ['time_slot__day_of_week', 'time_slot__start_time']
