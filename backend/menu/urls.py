from rest_framework import routers
from .api import MenuItemViewSet

router = routers.DefaultRouter()
router.register("api/menu", MenuItemViewSet, "menu")

urlpatterns = router.urls
