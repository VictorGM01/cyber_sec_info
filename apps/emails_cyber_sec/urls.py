from django.urls import path
from . import views

urlpatterns = [
    path('fale-conosco', views.fale_conosco, name='fale-conosco'),
    path('receber-conteudos', views.receber_conteudos, name='receber-conteudos'),
    path('enviar-mensagem', views.enviar_mensagem, name="envio-contato")
]
