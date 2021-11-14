from rest_framework import serializers

from .models import Producto, Tipoproducto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields= '__all__'

class TipoProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipoproducto
        fields= '__all__'