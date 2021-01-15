from rest_framework import serializers
from apps.forms.models import AdeiaEidikoySkopoy


class AdeiaEidikoySkopoyFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = ['from_time', 'to_time']

class AdeiaEidikoySkopoySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = '__all__'