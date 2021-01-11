from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

class RegistrationSerializer(serializers.ModelSerializer):
    '''
    Serializer for new user
    '''
    def validate_role(self, value):
        if (value == "admin"):
            raise serializers.ValidationError('Nice try!') 
        return value
    class Meta:
        model = User
        fields = '__all__'

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)    
        token['role'] = user.role    
        return token