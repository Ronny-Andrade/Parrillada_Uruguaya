from rest_framework import serializers

from .models import Rolusuario, Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields= '__all__'

class RolUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rolusuario
        fields = '__all__'