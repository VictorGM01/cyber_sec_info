# Generated by Django 4.0.2 on 2022-09-02 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutoriais_cyber_sec', '0002_tutorial_categoria'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutorial',
            name='categoria',
            field=models.TextField(choices=[('celulares', 'Celulares'), ('computadores', 'Computadores'), ('navegadores', 'Navegadores'), ('redes-sociais', 'Redes Sociais')], max_length=20),
        ),
    ]