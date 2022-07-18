from django.shortcuts import render, get_object_or_404
from django.views.decorators.cache import cache_page
from .models import Artigo
from django.core.paginator import Paginator


def artigos(request):
    artigos = Artigo.objects.order_by('-data_publicacao').filter(publicado=True)
    artigos_recentes = artigos[:3]

    paginator = Paginator(artigos, 9)

    pagina = request.GET.get('page')

    artigos_por_pagina = paginator.get_page(pagina)

    conteudo = {
        'artigos': artigos_por_pagina,
        'artigos_recentes': artigos_recentes
    }

    return render(request, 'artigos/geral_artigos.html', context=conteudo)


@cache_page(60)
def exibe_artigo(request, nome_artigo):

    artigo_a_ser_exibido = get_object_or_404(Artigo, titulo_para_caminho=nome_artigo)

    artigos_relacionados = Artigo.objects.order_by('-data_publicacao').filter(publicado=True).filter(
        tema__icontains=artigo_a_ser_exibido.tema).exclude(titulo_para_caminho=nome_artigo)[:2]

    conteudo = {
        'artigo': artigo_a_ser_exibido,
        'request': request,
        'artigos_relacionados': artigos_relacionados
    }

    return render(request, 'artigos/artigo.html', context=conteudo)
