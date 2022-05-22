from django.shortcuts import render, redirect
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
        preferencia_resposta = request.POST.getlist("preferencia-contato")
        mensagem = request.POST["mensagem"]

        if len(preferencia_resposta) == 2:
            preferencia_resposta = "E-mail e WhatsApp"

        else:
            preferencia_resposta = preferencia_resposta[0]

        assunto = f"Novo contato: {tipo_contato} de {email_usuario}"  # Assunto do e-mail
        email_host = settings.EMAIL_HOST_USER  # E-mail que enviará a mensagem

        email_destino = ["suportecybersec@gmail.com"]  # Destinatário - E-mail de suporte

        email = EmailMultiAlternatives(assunto, mensagem, email_host, email_destino)

        mensagem_final = render_to_string("emails/envio_email_suporte.html", context={
            "nome": nome, "tipo_solicitacao": tipo_contato, "mensagem": mensagem, "email": email_usuario,
            "telefone": telefone, "preferencia_resposta": preferencia_resposta
        })

        email.attach_alternative(mensagem_final, "text/html")
        email.send()

        return redirect("home-page")


def newsletter(request):
    return render(request, "emails/newsletter.html")


def envia_email(request, nome, destino, assunto_artigo, categoria, resumo):
    assunto = "Cyber Security Information: Novo Conteúdo"  # Assunto do e-mail
    mensagem = "Atualização"
    email_host = settings.EMAIL_HOST_USER  # E-mail que enviará a mensagem

    email_destino = [destino]  # Destinatário

    email = EmailMultiAlternatives(assunto, mensagem, email_host, email_destino)

    msg = render_to_string("emails/email_newsletter.html", context={
        "nome": nome, "assunto_artigo": assunto_artigo, "categoria": categoria, "resumo": resumo})  # Mensagem em html

    email.attach_alternative(msg, "text/html")
    email.send()
