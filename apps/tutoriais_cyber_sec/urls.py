from django.urls import path
from . import views

urlpatterns = [
    path('', views.tutoriais, name='tutorial'),
    path('<str:categoria>/<str:nome_tutorial>', views.exibe_tutorial, name='tutorial'),
    path('<str:categoria>', views.categoria, name='categoria')
]