from django.db import models


# Modelo para usuários que receberão os e-mails da newsletter
class Email(models.Model):
    nome = models.CharField(max_length=40)
    email = models.EmailField()

    def __str__(self):
        return self.email
