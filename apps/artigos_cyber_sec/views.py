from django.shortcuts import render, get_object_or_404
from .models import Artigo


def artigo(request, id_artigo):

    artigo_a_ser_exibido = get_object_or_404(Artigo, pk=id_artigo)

    conteudo = {
        'artigo': artigo_a_ser_exibido
    }

    return render(request, 'artigos/artigo.html', context=conteudo)

