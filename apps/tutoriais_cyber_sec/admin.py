from django.contrib import admin
from .models import Tutorial


class ListaTutoriais(admin.ModelAdmin):
    list_display = ('id', 'titulo', 'titulo_para_url', 'data_publicacao', 'publicado')
    list_display_links = ('id', 'titulo')
    list_editable = ('publicado', )
    search_fields = ('titulo_para_url', 'titulo')
    list_filter = ('categoria',)
    list_per_page = 10


admin.site.register(Tutorial, ListaTutoriais)
