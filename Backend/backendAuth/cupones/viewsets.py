from rest_framework import viewsets
from .models import Cupon, Tipocupon, Productocupon
from .serializer import CuponSerializer, TipoCuponSerializer, ProductoCuponSerializer

class CuponViewSet(viewsets.ModelViewSet):
    queryset = Cupon.objects.all()
    serializer_class = CuponSerializer

class TipoCuponViewSet(viewsets.ModelViewSet):
    queryset = Tipocupon.objects.all()
    serializer_class = TipoCuponSerializer

class ProductoCuponViewSet(viewsets.ModelViewSet):
    queryset = Productocupon.objects.all()
    serializer_class = ProductoCuponSerializer