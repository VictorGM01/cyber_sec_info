from django.shortcuts import render, HttpResponse


def fale_conosco(request):
    return HttpResponse("<h1>Fale Conosco</h1>")  # Apenas para teste


def receber_conteudos(request):
    return HttpResponse("<h1>Deseja receber e-mails sobre nossas publicações?</h1>")  # Apenas para teste
