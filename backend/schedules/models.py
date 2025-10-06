from django.db import models


class Course(models.Model):
    """Modelo para representar un curso/asignatura"""
    code = models.CharField(max_length=20, unique=True, verbose_name="Código")
    name = models.CharField(max_length=200, verbose_name="Nombre")
    credits = models.IntegerField(verbose_name="Créditos")
    course_type = models.CharField(
        max_length=20,
        choices=[
            ('obligatory', 'Obligatoria'),
            ('elective', 'Electiva'),
        ],
        default='obligatory',
        verbose_name="Tipo"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Curso"
        verbose_name_plural = "Cursos"
        ordering = ['code']

    def __str__(self):
        return f"{self.code} - {self.name}"


class Classroom(models.Model):
    """Modelo para representar un aula"""
    code = models.CharField(max_length=20, unique=True, verbose_name="Código")
    name = models.CharField(max_length=100, verbose_name="Nombre")
    capacity = models.IntegerField(verbose_name="Capacidad")
    building = models.CharField(max_length=100, blank=True, verbose_name="Edificio")
    floor = models.CharField(max_length=10, blank=True, verbose_name="Piso")
    classroom_type = models.CharField(
        max_length=20,
        choices=[
            ('lecture', 'Aula Teórica'),
            ('lab', 'Laboratorio'),
            ('workshop', 'Taller'),
            ('auditorium', 'Auditorio'),
        ],
        default='lecture',
        verbose_name="Tipo"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Aula"
        verbose_name_plural = "Aulas"
        ordering = ['building', 'code']

    def __str__(self):
        return f"{self.code} - {self.name} (Cap: {self.capacity})"


class Teacher(models.Model):
    """Modelo para representar un profesor"""
    code = models.CharField(max_length=20, unique=True, verbose_name="Código")
    first_name = models.CharField(max_length=100, verbose_name="Nombres")
    last_name = models.CharField(max_length=100, verbose_name="Apellidos")
    email = models.EmailField(unique=True, verbose_name="Email")
    department = models.CharField(max_length=100, blank=True, verbose_name="Departamento")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Profesor"
        verbose_name_plural = "Profesores"
        ordering = ['last_name', 'first_name']

    def __str__(self):
        return f"{self.code} - {self.last_name}, {self.first_name}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"


class TimeSlot(models.Model):
    """Modelo para representar un bloque horario"""
    day_of_week = models.CharField(
        max_length=10,
        choices=[
            ('monday', 'Lunes'),
            ('tuesday', 'Martes'),
            ('wednesday', 'Miércoles'),
            ('thursday', 'Jueves'),
            ('friday', 'Viernes'),
            ('saturday', 'Sábado'),
        ],
        verbose_name="Día"
    )
    start_time = models.TimeField(verbose_name="Hora inicio")
    end_time = models.TimeField(verbose_name="Hora fin")

    class Meta:
        verbose_name = "Bloque Horario"
        verbose_name_plural = "Bloques Horarios"
        ordering = ['day_of_week', 'start_time']
        unique_together = ['day_of_week', 'start_time', 'end_time']

    def __str__(self):
        return f"{self.get_day_of_week_display()} {self.start_time.strftime('%H:%M')} - {self.end_time.strftime('%H:%M')}"


class Schedule(models.Model):
    """Modelo para representar un horario generado"""
    name = models.CharField(max_length=200, verbose_name="Nombre")
    semester = models.CharField(max_length=20, verbose_name="Semestre")
    year = models.IntegerField(verbose_name="Año")
    is_active = models.BooleanField(default=False, verbose_name="Activo")
    fitness_score = models.FloatField(null=True, blank=True, verbose_name="Puntuación de aptitud")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Horario"
        verbose_name_plural = "Horarios"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.semester} {self.year}"


class ScheduleAssignment(models.Model):
    """Modelo para representar una asignación en un horario"""
    schedule = models.ForeignKey(
        Schedule,
        on_delete=models.CASCADE,
        related_name='assignments',
        verbose_name="Horario"
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name="Curso"
    )
    teacher = models.ForeignKey(
        Teacher,
        on_delete=models.CASCADE,
        verbose_name="Profesor"
    )
    classroom = models.ForeignKey(
        Classroom,
        on_delete=models.CASCADE,
        verbose_name="Aula"
    )
    time_slot = models.ForeignKey(
        TimeSlot,
        on_delete=models.CASCADE,
        verbose_name="Bloque Horario"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Asignación"
        verbose_name_plural = "Asignaciones"
        unique_together = [
            ['schedule', 'classroom', 'time_slot'],  # Un aula no puede estar ocupada dos veces al mismo tiempo
            ['schedule', 'teacher', 'time_slot'],    # Un profesor no puede dar dos clases al mismo tiempo
        ]

    def __str__(self):
        return f"{self.course.code} - {self.teacher.code} - {self.classroom.code} - {self.time_slot}"
