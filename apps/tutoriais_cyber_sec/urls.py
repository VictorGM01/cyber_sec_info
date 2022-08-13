from django.urls import path
from . import views

urlpatterns = [
    path('', views.tutoriais, name='tutoriais'),
    path('<str:nome_tutorial>', views.exibe_tutorial, name='tutorial'),
]