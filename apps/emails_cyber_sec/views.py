from django.shortcuts import render, redirect
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from project_cyber_sec import settings
from django.contrib import messages

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

        if not nome.strip():
            messages.error(request, "Insira um nome ou apelido para contato")
            return redirect("fale-conosco")

        elif len(telefone) < 14:  # Verifica se o número informado possui menos de 14 caracteres (com máscara)
            messages.error(request, "Insira um telefone válido")
            return redirect("fale-conosco")

        elif len(preferencia_resposta) == 2:
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

        messages.success(request, "Recebemos sua mensagem. Por favor, aguarde o nosso contato.")

        return redirect("fale-conosco")

    else:
        return redirect("fale-conosco")


def newsletter(request):
    return render(request, "emails/newsletter.html")


def cadastro_newsletter(request):
    if request.method == "POST":
        nome = request.POST['nome']
        email = request.POST['email']

        if not nome.strip() or not email.strip():  # Verifica se os campos estão vazios
            messages.error(request, "Preencha todos os campos")
            return redirect("newsletter")

        if Email.objects.filter(email=email).exists():  # Verifica se o usuário já está cadastrado
            messages.error(request, "Usuário já cadastrado")
            return redirect("newsletter")

        novo_email = Email.objects.create(nome=nome, email=email)

        novo_email.save()

        messages.success(request, "Parabéns! Seu cadastro foi realizado.")

        return redirect("newsletter")

    else:
        return redirect("newsletter")
