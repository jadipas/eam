from rest_framework import serializers
from apps.forms.models import AdeiaEidikoySkopoy, AdeiaErgasias, AnastoliErgasias

class AdeiaEidikoySkopoyFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = ['from_time', 'to_time', 'children']

class AdeiaEidikoySkopoySerializer(serializers.ModelSerializer):
    employee_username = serializers.ReadOnlyField(source='employee.username')
    class Meta:
        model = AdeiaEidikoySkopoy
        fields = ['id', 'from_time', 'to_time', 'created_at', 'children', 'employee_username', 'company']

class AdeiaErgasiasFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AdeiaErgasias
        fields = ['from_time', 'to_time']

class AdeiaErgasiasSerializer(serializers.ModelSerializer):
    employee_username = serializers.ReadOnlyField(source='employee.username')
    class Meta:
        model = AdeiaErgasias
        fields = ['id', 'from_time', 'to_time', 'created_at', 'employee_username', 'company']

class AnastoliErgasiasFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AnastoliErgasias
        fields = ['from_time', 'to_time']

class AnastoliErgasiasSerializer(serializers.ModelSerializer):
    employee_username = serializers.ReadOnlyField(source='employee.username')
    class Meta:
        model = AnastoliErgasias
        fields = ['id', 'from_time', 'to_time', 'created_at', 'employee_username', 'company']

class TilergasiaFormSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AnastoliErgasias
        fields = ['from_time', 'to_time']

class TilergasiaSerializer(serializers.ModelSerializer):
    employee_username = serializers.ReadOnlyField(source='employee.username')
    class Meta:
        model = AnastoliErgasias
        fields = ['id', 'from_time', 'to_time', 'created_at', 'employee_username', 'company']
