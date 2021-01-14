from rest_framework import serializers
from apps.forms.models import AdeiaEidikoySkopoy


class AdeiaEidikoySkopoySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = '__all__'
