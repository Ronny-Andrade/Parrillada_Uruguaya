from django.db import models

from producto.models import Producto

# Create your models here.

class Tipocupon(models.Model):
    idtipocupon = models.AutoField(db_column='idTipoCupon', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=100)
    estado = models.IntegerField(blank=True, null=True)
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.

    def info_completa(self):
        return "{}".format(self.nombre)

    def __str__(self):
        return self.info_completa()

    class Meta:
        db_table = 'tipocupon'

class Cupon(models.Model):
    idcupon = models.AutoField(db_column='idCupon', primary_key=True)  # Field name made lowercase.
    idtipocupon = models.ForeignKey('Tipocupon', db_column='idTipoCupon', on_delete=models.CASCADE)  # Field name made lowercase.
    cantidad = models.IntegerField(blank=True, null=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    imagen = models.ImageField(upload_to= 'imagencupones', null = True)
    visible = models.IntegerField(blank=True, null=True)
    fechainicio = models.DateField(db_column='fechaInicio')  # Field name made lowercase.
    fechafin = models.DateField(db_column='fechaFin')  # Field name made lowercase.
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'cupon'

class Productocupon(models.Model):
    idproductocupon = models.AutoField(db_column='idProductoCupon', primary_key=True)  # Field name made lowercase.
    idproducto = models.ForeignKey(Producto, db_column='idProducto', on_delete=models.CASCADE)  # Field name made lowercase.
    idcupon = models.ForeignKey(Cupon, db_column='idCupon', on_delete=models.CASCADE)  # Field name made lowercase.
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'productocupon'
