from django.shortcuts import render


def nosso_app(request):
    return render(request, 'ferramentas/nosso_app.html')
