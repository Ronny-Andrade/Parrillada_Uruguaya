from rest_framework import serializers

from .models import Cupon, Tipocupon, Productocupon

class CuponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cupon
        fields= '__all__'

class TipoCuponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipocupon
        fields= '__all__'

class ProductoCuponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productocupon
        fields= '__all__'