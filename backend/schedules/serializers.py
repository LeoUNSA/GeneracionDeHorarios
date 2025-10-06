from rest_framework import serializers
from .models import Course, Classroom, Teacher, TimeSlot, Schedule, ScheduleAssignment


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'code', 'name', 'credits', 'course_type', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classroom
        fields = ['id', 'code', 'name', 'capacity', 'building', 'floor', 
                  'classroom_type', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class TeacherSerializer(serializers.ModelSerializer):
    full_name = serializers.ReadOnlyField()
    
    class Meta:
        model = Teacher
        fields = ['id', 'code', 'first_name', 'last_name', 'full_name', 
                  'email', 'department', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at', 'full_name']


class TimeSlotSerializer(serializers.ModelSerializer):
    day_display = serializers.CharField(source='get_day_of_week_display', read_only=True)
    
    class Meta:
        model = TimeSlot
        fields = ['id', 'day_of_week', 'day_display', 'start_time', 'end_time']


class ScheduleAssignmentSerializer(serializers.ModelSerializer):
    course_detail = CourseSerializer(source='course', read_only=True)
    teacher_detail = TeacherSerializer(source='teacher', read_only=True)
    classroom_detail = ClassroomSerializer(source='classroom', read_only=True)
    time_slot_detail = TimeSlotSerializer(source='time_slot', read_only=True)
    
    class Meta:
        model = ScheduleAssignment
        fields = ['id', 'schedule', 'course', 'course_detail', 'teacher', 'teacher_detail',
                  'classroom', 'classroom_detail', 'time_slot', 'time_slot_detail',
                  'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class ScheduleSerializer(serializers.ModelSerializer):
    assignments = ScheduleAssignmentSerializer(many=True, read_only=True)
    assignments_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Schedule
        fields = ['id', 'name', 'semester', 'year', 'is_active', 'fitness_score',
                  'assignments_count', 'assignments', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at', 'assignments_count']
    
    def get_assignments_count(self, obj):
        return obj.assignments.count()


class ScheduleListSerializer(serializers.ModelSerializer):
    """Serializer simplificado para listar horarios"""
    assignments_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Schedule
        fields = ['id', 'name', 'semester', 'year', 'is_active', 'fitness_score',
                  'assignments_count', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at', 'assignments_count']
    
    def get_assignments_count(self, obj):
        return obj.assignments.count()
