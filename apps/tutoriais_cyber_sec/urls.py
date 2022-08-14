from django.urls import path
from . import views

urlpatterns = [
    path('', views.tutoriais, name='tutoriais'),
    path('<str:categoria>/<str:nome_tutorial>', views.exibe_tutorial, name='tutoriais'),
    path('<str:categoria>', views.categoria, name='categoria')
]