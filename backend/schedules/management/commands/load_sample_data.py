from django.core.management.base import BaseCommand
from schedules.models import Course, Classroom, Teacher, TimeSlot
from datetime import time


class Command(BaseCommand):
    help = 'Carga datos de prueba en la base de datos'

    def handle(self, *args, **options):
        self.stdout.write('Creando datos de prueba...')

        # Crear cursos
        courses_data = [
            ('CS101', 'Introducción a la Programación', 4, 'obligatory'),
            ('CS102', 'Estructuras de Datos', 4, 'obligatory'),
            ('CS201', 'Algoritmos Avanzados', 3, 'obligatory'),
            ('MATH101', 'Cálculo I', 4, 'obligatory'),
            ('MATH102', 'Álgebra Lineal', 3, 'obligatory'),
            ('PHYS101', 'Física I', 4, 'obligatory'),
            ('CS301', 'Inteligencia Artificial', 3, 'elective'),
            ('CS302', 'Bases de Datos', 3, 'elective'),
        ]

        for code, name, credits, course_type in courses_data:
            Course.objects.get_or_create(
                code=code,
                defaults={'name': name, 'credits': credits, 'course_type': course_type}
            )
        self.stdout.write(self.style.SUCCESS(f'✓ {len(courses_data)} cursos creados'))

        # Crear aulas
        classrooms_data = [
            ('A101', 'Aula 101', 40, 'Edificio A', '1', 'lecture'),
            ('A102', 'Aula 102', 35, 'Edificio A', '1', 'lecture'),
            ('A201', 'Aula 201', 45, 'Edificio A', '2', 'lecture'),
            ('LAB1', 'Laboratorio de Computación 1', 25, 'Edificio B', '1', 'lab'),
            ('LAB2', 'Laboratorio de Computación 2', 25, 'Edificio B', '1', 'lab'),
            ('AUD1', 'Auditorio Principal', 100, 'Edificio C', '1', 'auditorium'),
        ]

        for code, name, capacity, building, floor, room_type in classrooms_data:
            Classroom.objects.get_or_create(
                code=code,
                defaults={
                    'name': name,
                    'capacity': capacity,
                    'building': building,
                    'floor': floor,
                    'classroom_type': room_type
                }
            )
        self.stdout.write(self.style.SUCCESS(f'✓ {len(classrooms_data)} aulas creadas'))

        # Crear profesores
        teachers_data = [
            ('T001', 'Juan', 'Pérez', 'juan.perez@universidad.edu', 'Ciencias de la Computación'),
            ('T002', 'María', 'García', 'maria.garcia@universidad.edu', 'Ciencias de la Computación'),
            ('T003', 'Carlos', 'López', 'carlos.lopez@universidad.edu', 'Matemáticas'),
            ('T004', 'Ana', 'Martínez', 'ana.martinez@universidad.edu', 'Matemáticas'),
            ('T005', 'Pedro', 'Sánchez', 'pedro.sanchez@universidad.edu', 'Física'),
            ('T006', 'Laura', 'Rodríguez', 'laura.rodriguez@universidad.edu', 'Ciencias de la Computación'),
        ]

        for code, first_name, last_name, email, dept in teachers_data:
            Teacher.objects.get_or_create(
                code=code,
                defaults={
                    'first_name': first_name,
                    'last_name': last_name,
                    'email': email,
                    'department': dept
                }
            )
        self.stdout.write(self.style.SUCCESS(f'✓ {len(teachers_data)} profesores creados'))

        # Crear bloques horarios
        timeslots_data = [
            ('monday', '08:00', '09:30'),
            ('monday', '09:40', '11:10'),
            ('monday', '11:20', '12:50'),
            ('monday', '14:00', '15:30'),
            ('monday', '15:40', '17:10'),
            ('tuesday', '08:00', '09:30'),
            ('tuesday', '09:40', '11:10'),
            ('tuesday', '11:20', '12:50'),
            ('tuesday', '14:00', '15:30'),
            ('tuesday', '15:40', '17:10'),
            ('wednesday', '08:00', '09:30'),
            ('wednesday', '09:40', '11:10'),
            ('wednesday', '11:20', '12:50'),
            ('wednesday', '14:00', '15:30'),
            ('wednesday', '15:40', '17:10'),
            ('thursday', '08:00', '09:30'),
            ('thursday', '09:40', '11:10'),
            ('thursday', '11:20', '12:50'),
            ('thursday', '14:00', '15:30'),
            ('thursday', '15:40', '17:10'),
            ('friday', '08:00', '09:30'),
            ('friday', '09:40', '11:10'),
            ('friday', '11:20', '12:50'),
            ('friday', '14:00', '15:30'),
            ('friday', '15:40', '17:10'),
        ]

        for day, start, end in timeslots_data:
            start_time = time(*map(int, start.split(':')))
            end_time = time(*map(int, end.split(':')))
            TimeSlot.objects.get_or_create(
                day_of_week=day,
                start_time=start_time,
                end_time=end_time
            )
        self.stdout.write(self.style.SUCCESS(f'✓ {len(timeslots_data)} bloques horarios creados'))

        self.stdout.write(self.style.SUCCESS('\n✅ Datos de prueba cargados exitosamente!'))
