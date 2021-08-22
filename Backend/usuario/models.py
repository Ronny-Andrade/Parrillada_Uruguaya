# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.db.models.deletion import CASCADE


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


class Usuario(models.Model):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)  # Field name made lowercase.
    idrolusuario = models.ForeignKey(Rolusuario, db_column='idRolUsuario', on_delete=models.CASCADE)  # Field name made lowercase.
    nombre = models.CharField(max_length=100)
    cedula = models.CharField(max_length=45, blank=True, null=True)
    correo = models.CharField(max_length=100)
    telefono = models.IntegerField(blank=True, null=True)
    pass_field = models.CharField(db_column='pass', max_length=45)  # Field renamed because it was a Python reserved word.
    fechanac = models.DateField(db_column='fechaNac', blank=True, null=True)  # Field name made lowercase.
    fecharegistro = models.DateField(db_column='fechaRegistro', blank=True, null=True)  # Field name made lowercase.
    estado = models.CharField(max_length=45, blank=True, null=True)
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now=True)  # Field name made lowercase.

    class Meta:
        db_table = 'usuario'
