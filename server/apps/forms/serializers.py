from rest_framework import serializers
from apps.forms.models import AdeiaEidikoySkopoy, AdeiaErgasias, AnastoliErgasias

class AdeiaEidikoySkopoyFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = ['from_time', 'to_time', 'children']

class AdeiaEidikoySkopoySerializer(serializers.ModelSerializer):
    #status = serializers.ChoiceField(choices=AdeiaEidikoySkopoy.STATUS_CHOICES)
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = '__all__'

class AdeiaErgasiasFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaErgasias
        fields = ['from_time', 'to_time']

class AdeiaErgasiasSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaErgasias
        fields = '__all__'

class AnastoliErgasiasFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AnastoliErgasias
        fields = ['from_time', 'to_time']

class AnastoliErgasiasSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AnastoliErgasias
        fields = '__all__'