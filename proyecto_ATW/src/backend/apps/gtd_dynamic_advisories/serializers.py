from rest_framework import serializers
from apps.gtd_dynamic_advisories.models import Pyme, Asesor, Pyme_Asesor


class PymeSerializer(serializers.Serializer):
    rut = serializers.CharField()
    direccion = serializers.CharField()
    telefono = serializers.CharField()
    nombre = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Pyme
        fields=("rut", "direccion", "telefono", "nombre", "correo")

class AsesorSerializer(serializers.Serializer):
    nombre = serializers.CharField()
    rut = serializers.CharField()
    telefono = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Asesor
        fields = ("nombre", "rut", "telefono", "correo")

class Pyme_AsesorSerializer(serializers.Serializer):
    id_pyme = serializers.IntegerField()
    id_asesor = serializers.IntegerField()
    fecha_contratacion = serializers.DateField()
    departamento = serializers.CharField()
    modalidad_contratacion = serializers.CharField()
    class Meta:
        model = Pyme_Asesor
        fields = ("id_pyme", "id_asesor", "fecha_contratacion", "departamento", "modalidad_contratacion")
