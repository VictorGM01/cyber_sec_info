from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home-page'),
    path('sobre-nos/desenvolvedores', views.desenvolvedores, name='desenvolvedores'),
    path('sobre-nos/instituicao', views.instituicao, name='instituicao')
]
