from django.db import models

class perfil_usuario(models.Model):
    nombre = models.CharField(max_length=40)
    correo = models.CharField(max_length=60)
    password = models.CharField(max_length=80)

# Create your models here.
