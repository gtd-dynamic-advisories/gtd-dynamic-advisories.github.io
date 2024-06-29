from rest_framework import serializers
from models import Pyme
from models import Asesor
from models import Pyme_Asesor




# class PersonaSerializer(serializers.Serializer):
#     id = serializers.IntegerField()
#     nombre = serializers.CharField() 
#     f_nacimiento=serializers.CharField()
#     ciudad = serializers.CharField()
#     avatar = serializers.FileField()
#     class Meta:
#         model = Persona 


class PymeSerializer(serializers.Serializer):
    id = serializers.IntergerField()
    rut = serializers.CharField()
    direccion = serializers.CharField()
    telefono = serializers.CharField()
    nombre = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Pyme

class AsesorSerializer(serializers.Serializer):
    id = serializers.IntergerField()
    nombre = serializers.CharField()
    rut = serializers.CharField()
    telefono = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Asesor

class Pyme_AsesorSerializer(serializers.Serializer):
    id_pyme = serializers.ForeignKey()
    id_asesor = serializers.ForeignKey()
    fecha_contratacion = serializers.DateField()
    departamento = serializers.CharField()
    modalidad_contratacion = serializers.CharField()
    class Meta:
        model = Pyme_Asesor