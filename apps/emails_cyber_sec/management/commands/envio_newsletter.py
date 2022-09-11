from django.core.management.base import BaseCommand, CommandError
from datetime import datetime
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from project_cyber_sec import settings
# modelos
from apps.artigos_cyber_sec.models import Artigo
from apps.emails_cyber_sec.models import Email
from apps.ferramentas_cyber_sec.models import Ferramenta
from apps.tutoriais_cyber_sec.models import Tutorial


class Command(BaseCommand):
    help = "Execute para o envio dos e-mails de atualização (newsletter)"

    def handle(self, *args, **options):
        try:
            artigos = Artigo.objects.filter(data_publicacao=datetime.today()).filter(publicado=True)
            ferramentas = Ferramenta.objects.filter(data_criacao=datetime.today())
            tutoriais = Tutorial.objects.filter(data_publicacao=datetime.today()).filter(publicado=True)
            inscritos = Email.objects.all()

            if artigos.exists() or tutoriais.exists() or ferramentas.exists():
                assunto = "Novo Conteúdo: Cyber Security Information"  # Assunto do e-mail
                mensagem = "Novo conteúdo no site"
                host = settings.EMAIL_HOST_USER  # E-mail que enviará a mensagem

                for inscrito in inscritos:
                    destinatario = [inscrito.email]
                    nome = inscrito.nome

                    email = EmailMultiAlternatives(assunto, mensagem, host, destinatario)

                    # renderização do HTML
                    msg = render_to_string("emails/email_newsletter.html", context={"artigos": artigos,
                                                                                    "nome": nome,
                                                                                    "tutoriais": tutoriais,
                                                                                    "ferramentas": ferramentas})

                    email.attach_alternative(msg, "text/html")
                    print(f"Enviando e-mail para {destinatario}")
                    email.send()

                print("E-mails encaminhados com sucesso!")
            else:
                print("Não houve atualizações recentes")

        except Exception as e:
            raise CommandError(e)
