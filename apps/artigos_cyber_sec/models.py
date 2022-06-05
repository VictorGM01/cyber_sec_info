from django.db import models
from datetime import datetime


# Modelo para os artigos
class Artigo(models.Model):
    titulo = models.CharField(max_length=100)
    titulo_para_caminho = models.CharField(max_length=30)
    capa = models.ImageField(upload_to='artigos/%Y/%m/%d/')
    data_publicacao = models.DateField(default=datetime.today)
    tempo_de_leitura = models.IntegerField()
    conteudo = models.TextField()
    resumo = models.TextField()
    referencias = models.TextField()
    publicado = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo_para_caminho
