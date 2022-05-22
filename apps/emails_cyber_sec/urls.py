from django.urls import path
from . import views

urlpatterns = [
    path('fale-conosco', views.fale_conosco, name='fale-conosco'),
    path('newsletter', views.newsletter, name='newsletter'),
    path('enviar-mensagem', views.enviar_mensagem, name="envio-contato")
]
