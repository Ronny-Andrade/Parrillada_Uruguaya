from django.db import models

# Create your models here.
class Tipoproducto(models.Model):
    idtipoproducto = models.AutoField(db_column='idTipoProducto', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=100)
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now=True)  # Field name made lowercase.

    def info_completa(self):
        return "{}".format(self.nombre)

    def __str__(self):
        return self.info_completa()
    
    class Meta:
        db_table = 'tipoproducto'


class Producto(models.Model):
    idproducto = models.AutoField(db_column='idProducto', primary_key=True)  # Field name made lowercase.
    idtipoproducto = models.ForeignKey('Tipoproducto', db_column='idTipoProducto', on_delete=models.CASCADE)  # Field name made lowercase.
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.FloatField()
    imagen = models.ImageField(upload_to= 'imagencomida', null = True)
    visible = models.IntegerField(blank=True, null=True)
    puntos = models.FloatField(blank=True, null=True)
    fechacreacion = models.DateTimeField(auto_now_add=True)  # Field name made lowercase.
    fechamodificacion = models.DateTimeField(auto_now=True)  # Field name made lowercase.


    class Meta:        
        db_table = 'producto'
