from django.db import models
from datetime import datetime


# Create your models here.
class Ferramenta(models.Model):
    nome = models.CharField(max_length=100)
    resumo = models.TextField()
    data_criacao = models.DateField(default=datetime.today)
    link = models.URLField()

    def __str__(self):
        return self.nome
