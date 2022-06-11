from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def desenvolvedores(request):
    return render(request, "principal/desenvolvedores.html")

