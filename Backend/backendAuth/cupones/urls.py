from rest_framework import routers

from .viewsets import CuponViewSet, TipoCuponViewSet, ProductoCuponViewSet

router = routers.SimpleRouter()
router.register('cupones', CuponViewSet)
router.register('tipocupones', TipoCuponViewSet)
router.register('productocupones', ProductoCuponViewSet)

urlpatterns = router.urls