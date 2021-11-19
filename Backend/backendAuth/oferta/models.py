from django.db import models

from producto.models import Producto

# Create your models here.
class Tipooferta(models.Model):
    idtipooferta = models.AutoField(db_column='idTipoOferta', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=100)
    estado = models.IntegerField(blank=True, null=True)
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.

    def info_completa(self):
        return "{}".format(self.nombre)

    def __str__(self):
        return self.info_completa()

    class Meta:
        db_table = 'tipooferta'


class Oferta(models.Model):
    idoferta = models.AutoField(db_column='idOferta', primary_key=True)  # Field name made lowercase.
    idtipooferta = models.ForeignKey('Tipooferta', db_column='idTipoOferta', on_delete=models.CASCADE)  # Field name made lowercase.
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    imagen = models.ImageField(upload_to= 'imagenoferta', null = True)
    descuento = models.IntegerField(blank=True, null=True)
    visible = models.IntegerField(blank=True, null=True)
    fechainicio = models.DateField(db_column='fechaInicio', blank=True, null=True)  # Field name made lowercase.
    fechafin = models.DateField(db_column='fechaFin', blank=True, null=True)  # Field name made lowercase.
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'oferta'


class Productooferta(models.Model):
    idproductooferta = models.AutoField(db_column='idProductoOferta', primary_key=True)  # Field name made lowercase.
    idproducto = models.ForeignKey(Producto, db_column='idProducto', on_delete=models.CASCADE)  # Field name made lowercase.
    idoferta = models.ForeignKey(Oferta, db_column='idOferta', on_delete=models.CASCADE)  # Field name made lowercase.
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'productooferta'