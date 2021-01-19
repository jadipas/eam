import logging
import traceback
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework.exceptions import ValidationError
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.exceptions import ParseError
from rest_framework.permissions import IsAuthenticated
from apps.appointments.models import Appointment
from apps.appointments.serializers import AppointmentListSerializer, AppointmentSerializer, AppointmentAnonymousSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class MyAppointmentsView(APIView):

    def get(self, request):
        
        try:
            if (not request.user.is_authenticated):
                return Response(status=status.HTTP_404_NOT_FOUND)
            else:
                user = User.objects.get(username=request.user)
                appointments = Appointment.objects.filter(user=user).order_by('-date', '-time')
                return Response(AppointmentListSerializer(appointments, many=True).data, status=status.HTTP_200_OK)             
        
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error registering user: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CreateAppointmentView(APIView):
   
    def post(self, request):
        try:
            payload = request.data
            if (not request.user.is_authenticated):
                serializer = AppointmentAnonymousSerializer(data=payload)
                serializer.is_valid(raise_exception=True)
                appointment = Appointment.objects.create(phone=payload.get('phone'), email=payload.get('email'), date=payload.get('date'), time=payload.get('time'))
                
                return Response(status=status.HTTP_201_CREATED)
            else:
                serializer = AppointmentSerializer(data=request.data)
                serializer.is_valid(raise_exception=True)
                appointment = Appointment.objects.create(user=User.objects.get(username=request.user), date=payload.get('date'), time=payload.get('time'))
                
                return Response(status=status.HTTP_201_CREATED)     

        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error registering user: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AppointmentByDateView(APIView):

    serializer_class = AppointmentListSerializer
    def get(self, request):
        
        try:
            payload = request.data 
            if (not payload.get('date')):
                return Response(status=status.HTTP_400_BAD_REQUEST)
            else:
                appointments = Appointment.objects.filter(date=payload.get('date')).order_by('time')
                return Response(self.serializer_class(appointments, many=True).data, status=status.HTTP_200_OK)             
        except DjangoValidationError:
            return Response({"date": "Incorrect date format"}, status=status.HTTP_400_BAD_REQUEST)
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error registering user: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    