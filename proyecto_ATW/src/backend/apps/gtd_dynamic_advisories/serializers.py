from rest_framework import serializers
from apps.gtd_dynamic_advisories.models import Pyme, Asesor, Pyme_Asesor


class PymeSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    rut = serializers.CharField()
    direccion = serializers.CharField()
    telefono = serializers.CharField()
    nombre = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Pyme
        fields=("id", "rut", "direccion", "telefono", "nombre", "correo")

class AsesorSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nombre = serializers.CharField()
    rut = serializers.CharField()
    telefono = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Asesor

class Pyme_AsesorSerializer(serializers.Serializer):
    id_pyme = serializers.IntegerField()
    id_asesor = serializers.IntegerField()
    fecha_contratacion = serializers.DateField()
    departamento = serializers.CharField()
    modalidad_contratacion = serializers.CharField()
    class Meta:
        model = Pyme_Asesor
