from rest_framework import serializers
from apps.gtd_dynamic_advisories.models import Pyme, Asesor, Pyme_Asesor


class PymeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    rut = serializers.CharField()
    direccion = serializers.CharField()
    telefono = serializers.CharField()
    nombre = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Pyme
        fields=("id", "rut", "direccion", "telefono", "nombre", "correo")

class AsesorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    nombre = serializers.CharField()
    rut = serializers.CharField()
    telefono = serializers.CharField()
    correo = serializers.EmailField()
    class Meta:
        model = Asesor
        fields = ("id", "nombre", "rut", "telefono", "correo")

class Pyme_AsesorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    id_pyme = serializers.PrimaryKeyRelatedField(queryset=Pyme.objects.all())
    id_asesor = serializers.PrimaryKeyRelatedField(queryset=Asesor.objects.all())
    fecha_contratacion = serializers.DateField(format="%Y-%m-%d")
    departamento = serializers.CharField()
    modalidad_contratacion = serializers.CharField()
    class Meta:
        model = Pyme_Asesor
        fields = ("id", "id_pyme", "id_asesor", "fecha_contratacion", "departamento", "modalidad_contratacion")
