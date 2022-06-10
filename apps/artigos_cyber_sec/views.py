from django.shortcuts import render, get_object_or_404
from .models import Artigo


def artigo(request, nome_artigo):

    artigo_a_ser_exibido = get_object_or_404(Artigo, titulo_para_caminho=nome_artigo)

    conteudo = {
        'artigo': artigo_a_ser_exibido,
        'request': request,
    }

    return render(request, 'artigos/artigo.html', context=conteudo)

