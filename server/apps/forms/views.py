import logging
import traceback
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.exceptions import ParseError
from apps.forms.models import AdeiaEidikoySkopoy
from apps.forms.serializers import  AdeiaEidikoySkopoySerializer,AdeiaEidikoySkopoyFormSerializer
from apps.account.models import Company
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
User = get_user_model()
from django.core.serializers import serialize
import json

class AdeiaEidikoySkopoyView(APIView):
    
    permission_classes = (IsAuthenticated,)
    serializer_class = AdeiaEidikoySkopoyFormSerializer 
    
    def post(self, request):
        
        try:
            user = User.objects.get(username=request.user)
            print(user.role)
            if (user.role == "employee"):
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            else:
                payload = request.data 
                company, _ = Company.objects.update_or_create(name=user.company)
                serializer = self.serializer_class(data=request.data)
                serializer.is_valid(raise_exception=True)
                employee = User.objects.get(username=payload.get('employee_username'))
                if (employee.role == 'employee' and employee.company == user.company):
                    
                    form = AdeiaEidikoySkopoy.objects.create(from_time=payload.get('from_time'), to_time=payload.get('to_time'), employee=employee, company=company)
                    return Response(status=status.HTTP_201_CREATED)
                else:
                    return Response({"employee_username": ["User must be employee of the company"]}, status=status.HTTP_400_BAD_REQUEST)
        
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error creating a form of AdeiaEidikoySkopoy: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MyFormsView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = AdeiaEidikoySkopoySerializer 
    
    def get(self, request):
        
        try:
            forms = {}
            user = User.objects.get(username=request.user)
            print(user.role)
            if (user.role == "employee"):
                serializer = self.serializer_class(AdeiaEidikoySkopoy.objects.filter(employee=user), many=True)
            else:
                company, _ = Company.objects.update_or_create(name=user.company)
                serializer = self.serializer_class(AdeiaEidikoySkopoy.objects.filter(company=company), many=True)
                forms["AdeiaEidikoySkopoy"] = serializer.data
            return Response(forms, status=status.HTTP_200_OK)
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error returning list of forms: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)