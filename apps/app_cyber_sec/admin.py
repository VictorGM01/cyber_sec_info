from django.contrib import admin
from .models import Artigo


class ListaArtigos(admin.ModelAdmin):
    list_display = ('id', 'titulo_para_caminho', 'data_publicacao', 'publicado')
    list_display_links = ('id', 'titulo_para_caminho')
    list_editable = ('publicado', )
    search_fields = ('titulo_para_caminho', 'titulo')
    list_per_page = 10


admin.site.register(Artigo, ListaArtigos)
