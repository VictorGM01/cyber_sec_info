from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home-page'),
    path('sobre-nos/desenvolvedores', views.desenvolvedores, name='desenvolvedores'),
    path('sobre-nos/instituicao', views.instituicao, name='instituicao'),
    path('sobre-nos/pesquisas', views.pesquisas, name='pesquisas'),
    path('termos-de-uso', views.termos_de_uso, name='termos-de-uso'),
    path('politica-de-privacidade', views.politica_de_privacidade, name='politica-de-privacidade')
]
