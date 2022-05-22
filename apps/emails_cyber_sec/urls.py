from django.urls import path
from . import views

urlpatterns = [
    path('fale-conosco', views.fale_conosco, name='fale-conosco'),
    path('enviar-mensagem', views.enviar_mensagem, name='envio-contato'),
    path('newsletter', views.newsletter, name='newsletter'),
    path('cadastro-newsletter', views.cadastro_newsletter, name='cadastro-newsletter')
]
