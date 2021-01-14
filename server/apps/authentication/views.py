import logging
import traceback
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework.exceptions import ValidationError
from rest_framework.exceptions import ParseError

from apps.authentication.serializers import RegistrationSerializer
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.views import TokenObtainPairView
from apps.authentication.serializers import MyTokenObtainPairSerializer
from apps.account.models import Company

User = get_user_model()

class RegisterView(APIView):
    '''
    view for user registration
    '''
    serializer_class = RegistrationSerializer
    def post(self, request):
        
        try:
            payload = request.data 
            company = None
            if (payload.get('company')):
                company, _ = Company.objects.update_or_create(name=payload.get('company'))


            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = User(username=payload.get('username'), amka=payload.get('amka'), afm=payload.get('afm'), email=payload.get('afm'), first_name=payload.get('first_name'), last_name=payload.get('last_name'), phone=payload.get('phone'), role=payload.get('role'), date_of_birth=payload.get('day_of_birth'), has_child_under_12=payload.get('has_child_under_12', False), company=company)
            validate_password(payload.get('password'), user)
            user.set_password(payload.get('password'))
            user.save()           
            
            return Response(status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error registering user: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class BlacklistTokenUpdateView(APIView):
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)