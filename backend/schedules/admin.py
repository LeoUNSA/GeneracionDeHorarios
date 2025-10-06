from django.contrib import admin
from .models import Course, Classroom, Teacher, TimeSlot, Schedule, ScheduleAssignment


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'credits', 'course_type', 'created_at']
    list_filter = ['course_type', 'credits']
    search_fields = ['code', 'name']
    ordering = ['code']


@admin.register(Classroom)
class ClassroomAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'capacity', 'building', 'floor', 'classroom_type', 'created_at']
    list_filter = ['classroom_type', 'building']
    search_fields = ['code', 'name', 'building']
    ordering = ['building', 'code']


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ['code', 'last_name', 'first_name', 'email', 'department', 'created_at']
    list_filter = ['department']
    search_fields = ['code', 'first_name', 'last_name', 'email']
    ordering = ['last_name', 'first_name']


@admin.register(TimeSlot)
class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ['day_of_week', 'start_time', 'end_time']
    list_filter = ['day_of_week']
    ordering = ['day_of_week', 'start_time']


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ['name', 'semester', 'year', 'is_active', 'fitness_score', 'created_at']
    list_filter = ['semester', 'year', 'is_active']
    search_fields = ['name']
    ordering = ['-created_at']
    actions = ['activate_schedule']

    def activate_schedule(self, request, queryset):
        """Acción para activar horarios seleccionados"""
        for schedule in queryset:
            Schedule.objects.filter(
                semester=schedule.semester,
                year=schedule.year
            ).update(is_active=False)
            schedule.is_active = True
            schedule.save()
        self.message_user(request, f"{queryset.count()} horario(s) activado(s).")
    activate_schedule.short_description = "Activar horarios seleccionados"


@admin.register(ScheduleAssignment)
class ScheduleAssignmentAdmin(admin.ModelAdmin):
    list_display = ['schedule', 'course', 'teacher', 'classroom', 'time_slot', 'created_at']
    list_filter = ['schedule', 'time_slot__day_of_week']
    search_fields = ['course__code', 'course__name', 'teacher__last_name', 'classroom__code']
    ordering = ['schedule', 'time_slot__day_of_week', 'time_slot__start_time']
