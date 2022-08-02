from django.db import models
from datetime import datetime


# Opções para os temas dos artigos
class Temas(models.TextChoices):
    CIBERSEG = 'Seguranca Cibernetica'
    CIBERSEG_CRIMES = 'Seguranca Cibernetica | Crimes Cibernéticos'
    CIBERSEG_LGPD = 'Seguranca Cibernetica | LGPD'


# Modelo para os artigos
class Artigo(models.Model):
    titulo = models.CharField(max_length=100)
    titulo_para_url = models.CharField(max_length=45)
    capa = models.ImageField(upload_to='artigos/%Y/%m/%d/')
    data_publicacao = models.DateField(default=datetime.today)
    tempo_de_leitura = models.IntegerField()
    conteudo = models.TextField()
    resumo = models.TextField()
    referencias = models.TextField()
    tema = models.TextField(max_length=45, choices=Temas.choices)
    publicado = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo_para_url
