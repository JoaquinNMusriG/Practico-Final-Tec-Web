from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"facts", views.FactView, "facts")

urlpatterns = [
    path("facts/", include(router.urls)),
    path('filtered/', views.FactFiltered.as_view(), name='factsFiltered'),
]