from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CourseViewSet, ClassroomViewSet, TeacherViewSet,
    TimeSlotViewSet, ScheduleViewSet, ScheduleAssignmentViewSet
)

router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='course')
router.register(r'classrooms', ClassroomViewSet, basename='classroom')
router.register(r'teachers', TeacherViewSet, basename='teacher')
router.register(r'timeslots', TimeSlotViewSet, basename='timeslot')
router.register(r'schedules', ScheduleViewSet, basename='schedule')
router.register(r'assignments', ScheduleAssignmentViewSet, basename='assignment')

urlpatterns = [
    path('', include(router.urls)),
]
