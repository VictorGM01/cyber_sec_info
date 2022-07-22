from django.db import models


# Opções para as categorias dos tutoriais
class Categoria(models.TextChoices):
    CELULARES = 'Celulares'
    COMPUTADORES = 'Computadores'
    NAVEGADORES = 'Navegadores'
    REDES_SOCIAIS = 'Redes Sociais'
