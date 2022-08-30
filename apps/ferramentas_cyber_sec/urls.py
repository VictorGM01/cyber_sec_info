from django.urls import path
from . import views


urlpatterns = [
    path('nosso-app', views.nosso_app, name='nosso-app'),
    path('gerador-de-senhas', views.gerador_de_senhas, name='gerador-de-senhas')
]
