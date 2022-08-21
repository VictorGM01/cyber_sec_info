from django.shortcuts import render, get_object_or_404, redirect
from django.views.decorators.cache import cache_page
from .models import Artigo
from django.core.paginator import Paginator
from django.db.models import Q


def artigos(request):
    busca = request.GET.get('busca')
    artigos = Artigo.objects.order_by('data_publicacao').filter(publicado=True)
    artigos_recentes = Artigo.objects.order_by('-data_publicacao').filter(publicado=True)[:3]

    paginator = Paginator(artigos, 9)

    numero_de_paginas = paginator.num_pages

    pagina = request.GET.get('page')

    artigos_por_pagina = paginator.get_page(pagina)

    if busca:
        artigos_buscados = Artigo.objects.filter(Q(titulo__icontains=busca) | Q(conteudo__icontains=busca)).filter(publicado=True)
        return render(request, 'artigos/geral_artigos.html', context={'artigos': artigos_buscados, 'busca': True})

    conteudo = {
        'artigos': artigos_por_pagina,
        'artigos_recentes': artigos_recentes,
        'paginas': numero_de_paginas
    }

    return render(request, 'artigos/geral_artigos.html', context=conteudo)


@cache_page(60)
def exibe_artigo(request, nome_artigo):

    artigo_a_ser_exibido = get_object_or_404(Artigo, titulo_para_url=nome_artigo)

    if not artigo_a_ser_exibido.publicado:
        return redirect('artigos')

    artigos_relacionados = Artigo.objects.order_by('-data_publicacao').filter(publicado=True).filter(
        tema__icontains=artigo_a_ser_exibido.tema).exclude(titulo_para_url=nome_artigo)[:2]

    conteudo = {
        'artigo': artigo_a_ser_exibido,
        'request': request,
        'artigos_relacionados': artigos_relacionados
    }

    return render(request, 'artigos/artigo.html', context=conteudo)
