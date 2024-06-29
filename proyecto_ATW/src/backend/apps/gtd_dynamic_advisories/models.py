from django.db import models

MODALIDAD_CONTRATACION = (
    ("ONLINE", "online"),
    ("PRESENCIAL", "presencial"),
    ("TELEFONICA", "telefonica"),
    ("OTRA", "otra")
)

class Pyme(models.Model):
    id = models.IntegerField(primary_key=True)
    rut = models.CharField(max_length=10)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)
    nombre = models.CharField(max_length=40)
    correo = models.EmailField()

    def __str__(self):
        return "{} ({})".format(self.nombre, self.id)

class Asesor(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    rut = models.CharField(max_length=10)
    telefono = models.CharField(max_length=15)
    correo = models.EmailField()

    def __str__(self):
        return "{} ({})".format(self.nombre, self.id)


class Pyme_Asesor(models.Model):
    id_pyme = models.ForeignKey(Pyme, on_delete=models.CASCADE)
    id_asesor = models.ForeignKey(Asesor, on_delete=models.CASCADE)
    fecha_contratacion = models.DateField()
    departamento = models.CharField(max_length=20)
    modalidad_contratacion = models.CharField(max_length=10, choices=MODALIDAD_CONTRATACION, default="PRESENCIAL")
