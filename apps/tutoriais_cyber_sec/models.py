from django.db import models
from datetime import datetime


# Opções para as categorias dos tutoriais
class Categorias(models.TextChoices):
    CELULARES = 'celulares'
    COMPUTADORES = 'computadores'
    NAVEGADORES = 'navegadores'
    REDES_SOCIAIS = 'redes-sociais'


# Modelo para os tutoriais
class Tutorial(models.Model):
    titulo = models.CharField(max_length=100)
    titulo_para_url = models.CharField(max_length=100)
    capa = models.ImageField(upload_to='tutoriais/%Y/%m/%d/')
    data_publicacao = models.DateField(default=datetime.today)
    tempo_de_leitura = models.IntegerField()
    tempo_de_video = models.IntegerField(blank=True)
    motivacao = models.TextField()
    url_video = models.URLField(blank=True)
    conteudo = models.TextField()
    resumo = models.TextField()
    categoria = models.TextField(max_length=20, choices=Categorias.choices)
    publicado = models.BooleanField(default=False)
