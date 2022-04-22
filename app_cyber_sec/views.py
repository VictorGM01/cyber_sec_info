from django.shortcuts import render, HttpResponse


def index(request):
    return HttpResponse("<title>Cyber Sec. Info</title>")  # Apenas para teste
