from django.shortcuts import render, get_object_or_404, redirect
from .models import Tutorial


def tutoriais(request):
    return render(request, 'tutoriais/geral_tutoriais.html')


def exibe_tutorial(request, nome_tutorial: str):
    tutorial_a_ser_exibido = get_object_or_404(Tutorial, titulo_para_url=nome_tutorial)

    if not tutorial_a_ser_exibido.publicado:
        return redirect('tutoriais')

    conteudo = {
        'tutorial': tutorial_a_ser_exibido,
        'request': request,
    }

    return render(request, 'tutoriais/tutorial.html', context=conteudo)
