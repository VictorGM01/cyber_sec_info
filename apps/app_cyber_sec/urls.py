from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.index, name='home-page')
]
