from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def desenvolvedores(request):
    return render(request, "principal/desenvolvedores.html")


def sitemap(request):
    return render(request, 'sitemap.xml', content_type='xml')
