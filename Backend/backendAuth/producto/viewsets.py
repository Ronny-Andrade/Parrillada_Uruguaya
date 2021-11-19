from rest_framework import viewsets
from .models import Producto, Tipoproducto
from .serializer import ProductoSerializer, TipoProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class TipoProductoViewSet(viewsets.ModelViewSet):
    queryset = Tipoproducto.objects.all()
    serializer_class = TipoProductoSerializer