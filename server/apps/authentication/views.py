import logging
import traceback
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework.exceptions import ValidationError
from rest_framework.exceptions import ParseError
from rest_framework.permissions import IsAuthenticated

from apps.authentication.serializers import RegistrationSerializer
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.views import TokenObtainPairView
from apps.authentication.serializers import MyTokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from apps.account.models import Company
from apps.account.serializers import UserSerializer, UserUpdateSerializer, UserUpdatePasswordSerializer
from django.contrib.auth.hashers import check_password
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
            user = User(username=payload.get('username'), amka=payload.get('amka'), afm=payload.get('afm'), email=payload.get('email'), first_name=payload.get('first_name'), last_name=payload.get('last_name'), phone=payload.get('phone'), role=payload.get('role'), date_of_birth=payload.get('day_of_birth'), company=company)
            validate_password(payload.get('password'), user)
            user.set_password(payload.get('password'))
            if (payload.get('password') == payload.get('rpassword')):
                user.save()     
            else:
                return Response({"rpassword": ["Password confirmation must match password."]}, status=status.HTTP_400_BAD_REQUEST)
              
            
            return Response(status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            logging.error("Error registering user: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProfileView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    def get(self, request):
        return Response(UserSerializer(request.user).data, status=status.HTTP_200_OK)


class UpdateProfileView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserUpdateSerializer
    def post(self, request):
        try:
            payload = request.data
            if (payload.get('company')):
                company, _ = Company.objects.update_or_create(name=payload.get('company'))
            serializer = self.serializer_class(request.user, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logging.error("Error blacklisting token: {}".format(traceback.format_exc()))
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UpdatePasswordView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserUpdatePasswordSerializer
    def post(self, request):
        try:
            payload = request.data 
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = User.objects.get(username=request.user)
            print(user.password)
            if (check_password(payload.get('old_password'), user.password)):
                validate_password(payload.get('new_password'), user)
                
                if (payload.get('new_password') == payload.get('new_rpassword')):
                    user.set_password(payload.get('new_password'))
                    user.save()     
                else:
                    return Response({"new_rpassword": ["Password confirmation must match new password."]}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"old_password": ["Wrong password"]},status=status.HTTP_400_BAD_REQUEST)
            return Response(status=status.HTTP_200_OK)
        except ValidationError:
            logging.warning("Couldn't register new user. Bad user info: {}".format(traceback.format_exc()))
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ParseError: 
            return Response("Error in request", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logging.error("Error blacklisting token: {}".format(traceback.format_exc()))
            return Response(status=status.HTTP_400_BAD_REQUEST)
            

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
            logging.error("Error blacklisting token: {}".format(traceback.format_exc()))
            return Response(status=status.HTTP_400_BAD_REQUEST)