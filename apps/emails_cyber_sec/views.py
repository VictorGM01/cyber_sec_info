from django.shortcuts import render, HttpResponse
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from project_cyber_sec import settings

from .models import Email


def fale_conosco(request):
    return render(request, "emails/fale_conosco.html")


def enviar_mensagem(request):
    if request.method == "POST":
        nome = request.POST["nome"]
        email_usuario = request.POST["email"]
        telefone = request.POST["telefone"]
        tipo_contato = request.POST["tipo-contato"]
        preferencia_resposta = request.POST["preferencia-contato"]
        mensagem = request.POST["mensagem"]

        return render(request, "index.html")


def receber_conteudos(request):
    return HttpResponse("<h1>Deseja receber e-mails sobre nossas publicações?</h1>")  # Apenas para teste


def envia_email(request, nome, destino, assunto_artigo, categoria, resumo):
    assunto = "Cyber Security Information: Novo Conteúdo"  # Assunto do e-mail
    mensagem = "Atualização"
    email_host = settings.EMAIL_HOST_USER  # E-mail que enviará a mensagem

    email_destino = [destino]  # Destinatário

    email = EmailMultiAlternatives(assunto, mensagem, email_host, email_destino)

    msg = render_to_string("emails/envio_de_email.html", context={
        "nome": nome, "assunto_artigo": assunto_artigo, "categoria": categoria, "resumo": resumo})  # Mensagem em html

    email.attach_alternative(msg, "text/html")
    email.send()
