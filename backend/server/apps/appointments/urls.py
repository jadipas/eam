from django.urls import path
from apps.appointments import views

urlpatterns = [
    path('myappointments', views.MyAppointmentsView.as_view()),
    path('create_appointment', views.CreateAppointmentView.as_view()),
    path('appointment_by_date', views.AppointmentByDateView.as_view())
]