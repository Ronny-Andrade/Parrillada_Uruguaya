from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class Rolusuario(models.Model):
    idrolusuario = models.AutoField(db_column='idRolUsuario', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=45)
    descripcion = models.CharField(max_length=250, blank=True, null=True)
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now=True)  # Field name made lowercase.

    def info_completa(self):
        return "{}".format(self.nombre)

    def __str__(self):
        return self.info_completa()
        
    class Meta:
        db_table = 'rolusuario'

        
class User(AbstractUser):
    idrolusuario = models.ForeignKey(Rolusuario, db_column='idRolUsuario', on_delete=models.CASCADE)
    ide_card = models.CharField(max_length=45, blank=True, null=True)
    cell_phone = models.CharField(max_length=11, blank=True, null=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=450)  # Field renamed because it was a Python reserved word.
    status = models.IntegerField(blank=True, null=True)
    fechanac = models.DateField(blank=True, null=True)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
