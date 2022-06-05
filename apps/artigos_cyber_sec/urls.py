from django.urls import path
from . import views

urlpatterns = [
    path('<int:id_artigo>', views.artigo, name='artigo'),
]
