from django.shortcuts import render, get_object_or_404, redirect
from .models import Tutorial, Categorias
from apps.artigos_cyber_sec.models import Artigo


def tutoriais(request):
    tutoriais = Tutorial.objects.order_by('data_publicacao').filter(publicado=True)
    tutoriais_recentes = Tutorial.objects.order_by('-data_publicacao').filter(publicado=True)[:3]

    conteudo = {
        'tutoriais': tutoriais,
        'tutoriais_recentes': tutoriais_recentes,
    }

    return render(request, 'tutoriais/geral_tutoriais.html', context=conteudo)


def categoria(request, categoria: str):

    if categoria not in Categorias.values:
        return redirect('tutoriais')

    tutoriais_por_categoria = Tutorial.objects.filter(publicado=True).filter(categoria=categoria)

    conteudo = {
        'tutoriais_por_categoria': tutoriais_por_categoria,
        'categoria': categoria,
    }

    return render(request, 'tutoriais/geral_categorias.html', context=conteudo)


def exibe_tutorial(request, categoria: str, nome_tutorial: str):
    tutorial_a_ser_exibido = get_object_or_404(Tutorial, categoria=categoria, titulo_para_url=nome_tutorial)

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
