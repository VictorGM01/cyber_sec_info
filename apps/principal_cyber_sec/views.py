from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def desenvolvedores(request):
    return render(request, "principal/desenvolvedores.html")


def sobre_o_projeto(request):
    return render(request, "principal/sobre_o_projeto.html")


def instituicao(request):
    return render(request, "principal/instituicao.html")


def pesquisas(request):
    return render(request, "principal/pesquisas.html")


def sitemap(request):
    return render(request, 'sitemap.xml', content_type='xml')


def termos_de_uso(request):
    return render(request, "principal/termos_de_uso.html")


def politica_de_privacidade(request):
    return render(request, "principal/politica_de_privacidade.html")
