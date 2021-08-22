from rest_framework import serializers, viewsets
from .models import Rolusuario, Usuario
from .serializer import RolUsuarioSerializer, UsuarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class RolUsuarioViewSet(viewsets.ModelViewSet):
    queryset = Rolusuario.objects.all()
    serializer_class = RolUsuarioSerializer