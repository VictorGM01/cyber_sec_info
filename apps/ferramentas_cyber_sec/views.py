from django.shortcuts import render


def nosso_app(request):
    return render(request, 'ferramentas/nosso_app.html')


def gerador_de_senhas(request):
    return render(request, 'ferramentas/gerador_de_senhas.html')
