from rest_framework import routers, urlpatterns

from .viewsets import RolUsuarioViewSet, UsuarioViewSet

router = routers.SimpleRouter()
router.register('usuarios', UsuarioViewSet)
router.register('rolusuarios', RolUsuarioViewSet)

urlpatterns = router.urls