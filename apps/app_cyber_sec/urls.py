from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.index, name='home-page')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
