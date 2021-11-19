from rest_framework import routers

from .viewsets import OfertaViewSet, TipoOfertaViewSet, ProductoOfertaViewSet

router = routers.SimpleRouter()
router.register('ofertas', OfertaViewSet)
router.register('tipooferta', TipoOfertaViewSet)
router.register('productooferta', ProductoOfertaViewSet)

urlpatterns = router.urls