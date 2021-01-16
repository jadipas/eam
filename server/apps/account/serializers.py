from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = User
        exclude = ['id', 'password', 'groups', 'user_permissions']
        

class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ['id', 'password', 'groups', 'user_permissions', 'role', 'username']        

class UserUpdatePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(max_length=128)
    new_password = serializers.CharField(max_length=128)
    new_rpassword = serializers.CharField(max_length=128)