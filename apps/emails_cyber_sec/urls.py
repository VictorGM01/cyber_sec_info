from django.urls import path
from . import views

urlpatterns = [
    path('/fale-conosco', views.fale_conosco, name='fale-conosco')
]
