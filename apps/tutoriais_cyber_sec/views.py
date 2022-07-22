from django.shortcuts import render


def tutoriais(request):
    return render(request, 'tutoriais/geral_tutoriais.html')
