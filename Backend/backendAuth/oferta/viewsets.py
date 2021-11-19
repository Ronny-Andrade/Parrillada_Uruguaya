from rest_framework import viewsets
from .models import Tipooferta, Oferta, Productooferta
from .serializer import OfertaSerializer, TipoOfertaSerializer, ProductoOfertaSerializer

class OfertaViewSet(viewsets.ModelViewSet):
    queryset = Oferta.objects.all()
    serializer_class = OfertaSerializer

class TipoOfertaViewSet(viewsets.ModelViewSet):
    queryset = Tipooferta.objects.all()
    serializer_class = TipoOfertaSerializer

class ProductoOfertaViewSet(viewsets.ModelViewSet):
    queryset = Productooferta.objects.all()
    serializer_class = ProductoOfertaSerializer