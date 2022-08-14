"""project_cyber_sec URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView
from apps.principal_cyber_sec import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("apps.principal_cyber_sec.urls")),
    path('sobre-nos/email/', include("apps.emails_cyber_sec.urls")),
    path('tutorial/', include("apps.tutoriais_cyber_sec.urls")),
    path('artigos/', include("apps.artigos_cyber_sec.urls")),
    path('sitemap.xml', views.sitemap, name='sitemap.xml'),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain"))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
