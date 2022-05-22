from django.contrib import admin
from .models import Email


class ListaEmails(admin.ModelAdmin):
    list_display = ('id', 'email', 'nome')
    list_display_links = ('id', 'email')
    search_fields = ('email',)
    list_per_page = 20


admin.site.register(Email, ListaEmails)
