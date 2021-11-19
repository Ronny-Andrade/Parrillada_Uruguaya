from rest_framework import serializers
from .models import Tipooferta, Oferta, Productooferta

class OfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oferta
        fields= '__all__'

class TipoOfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipooferta
        fields= '__all__'

class ProductoOfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productooferta
        fields= '__all__'