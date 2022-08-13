from django.shortcuts import render, get_object_or_404, redirect
from .models import Tutorial
from apps.artigos_cyber_sec.models import Artigo


def tutoriais(request):
    return render(request, 'tutoriais/geral_tutoriais.html')


def exibe_tutorial(request, nome_tutorial: str):
    tutorial_a_ser_exibido = get_object_or_404(Tutorial, titulo_para_url=nome_tutorial)

    if not tutorial_a_ser_exibido.publicado:
        return redirect('tutoriais')

    tutoriais_relacionados = Tutorial.objects.order_by('-data_publicacao').filter(publicado=True).filter(
        categoria=tutorial_a_ser_exibido.categoria).exclude(titulo_para_url=nome_tutorial)[:2]

    artigos_relacionados = Artigo.objects.filter(conteudo__icontains=tutorial_a_ser_exibido.titulo).filter(publicado=True)

    conteudo = {
        'tutorial': tutorial_a_ser_exibido,
        'request': request,
        'tutoriais_relacionados': tutoriais_relacionados,
        'artigos_relacionados': artigos_relacionados,
    }

    return render(request, 'tutoriais/tutorial.html', context=conteudo)
