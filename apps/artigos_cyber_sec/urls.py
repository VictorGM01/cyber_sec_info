from django.urls import path
from . import views

urlpatterns = [
    path('<str:nome_artigo>', views.artigo, name='artigo'),
]
