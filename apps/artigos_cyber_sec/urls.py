from django.urls import path
from . import views

urlpatterns = [
    path('', views.artigos, name='artigos'),
    path('<str:nome_artigo>', views.exibe_artigo, name='artigo'),
]
