from rest_framework import routers, urlpatterns

from .viewsets import ProductoViewSet, TipoProductoViewSet

router = routers.SimpleRouter()
router.register('productos', ProductoViewSet)
router.register('tipoproductos', TipoProductoViewSet)

urlpatterns = router.urls