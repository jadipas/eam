from rest_framework import serializers
from apps.appointments.models import Appointment

class AppointmentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ['date', 'time']
        ordering = ['-date', '-time']    


class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ['date', 'time']   
        ordering_fields = ['date', 'time']    

class AppointmentAnonymousSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ['phone', 'email', 'date', 'time']
        ordering = ['-date', '-time']    