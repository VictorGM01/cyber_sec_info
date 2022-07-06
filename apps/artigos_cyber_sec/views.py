from django.shortcuts import render, get_object_or_404
from django.views.decorators.cache import cache_page
from .models import Artigo


@cache_page(60)
def artigo(request, nome_artigo):

    artigo_a_ser_exibido = get_object_or_404(Artigo, titulo_para_caminho=nome_artigo)

    artigos_relacionados = Artigo.objects.order_by('-data_publicacao').filter(publicado=True).filter(
        tema__icontains=artigo_a_ser_exibido.tema).exclude(titulo_para_caminho=nome_artigo)[:2]

    conteudo = {
        'artigo': artigo_a_ser_exibido,
        'request': request,
        'artigos_relacionados': artigos_relacionados
    }

    return render(request, 'artigos/artigo.html', context=conteudo)
