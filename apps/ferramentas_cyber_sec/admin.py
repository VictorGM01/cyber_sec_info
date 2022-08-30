from django.contrib import admin
from .models import Ferramenta


class ListaFerramenta(admin.ModelAdmin):
    list_display = ('id', 'nome', 'link', 'data_criacao')
    list_display_links = ('id', 'nome')
    list_editable = ('data_criacao', )
    search_fields = ('nome', )
    list_per_page = 10


# Register your models here.
admin.site.register(Ferramenta, ListaFerramenta)
