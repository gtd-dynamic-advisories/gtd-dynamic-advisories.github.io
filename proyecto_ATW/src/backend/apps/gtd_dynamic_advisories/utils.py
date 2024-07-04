from apps.gtd_dynamic_advisories.models import Pyme, Asesor, Pyme_Asesor
from apps.gtd_dynamic_advisories.serializers import PymeSerializer, AsesorSerializer, Pyme_AsesorSerializer
from django.http import Http404
import datetime

### Read ###
def getPyme(id = None):
    if id is None:
        raise Http404
    
    try:
        id = int(id)
        pyme = Pyme.objects.get(id = id)
        return PymeSerializer(pyme).data

    except Exception as e:
        print(e)
        raise Http404
    
def getAsesor(id = None):
    if id is None:
        raise Http404
    
    try:
        id = int(id)
        asesor = Asesor.objects.get(id = id)
        return AsesorSerializer(asesor).data
    
    except Exception as e:
        print(e)
        raise Http404
    
def getPyme_Asesor(id):
    if id is None:
        raise Http404
    
    try:
        id = int(id)
        pyme_asesor = Pyme_Asesor.objects.get(id = id)
        return Pyme_AsesorSerializer(pyme_asesor).data
    
    except Exception as e:
        print(e)
        raise Http404
    

def getAllPymes(request):
    pymes = Pyme.objects.all()
    return PymeSerializer(pymes, context={"request": request}, many=True).data

def getAllAsesors(request):
    asesors = Asesor.objects.all()
    return AsesorSerializer(asesors, context={"request": request}, many=True).data

def getAllPyme_Asesors(request):
    pyme_asesors = Pyme_Asesor.objects.all()
    return Pyme_AsesorSerializer(pyme_asesors, context = {"request": request}, many=True).data


### Create ###
def createPyme(*args, **kwargs):
    p = Pyme.objects.create()
    p.rut = kwargs.get('rut') if 'rut' in kwargs else None
    p.direccion = kwargs.get('direccion') if 'direccion' in kwargs else None
    p.telefono = kwargs.get('telefono') if 'telefono' in kwargs else None
    p.nombre = kwargs.get('nombre') if 'nombre' in kwargs else None
    p.correo = kwargs.get('correo') if 'correo' in kwargs else None
    p.save()
    return PymeSerializer(p).data


def createAsesor(*args, **kwargs):
    a = Asesor.objects.create()
    a.nombre = kwargs.get('nombre') if 'nombre' in kwargs else None 
    a.rut = kwargs.get('rut') if 'rut' in kwargs else None 
    a.telefono = kwargs.get('telefono') if 'telefono' in kwargs else None 
    a.correo = kwargs.get('correo') if 'correo' in kwargs else None
    a.save()
    return AsesorSerializer(a).data


def createPyme_Asesor(*args, **kwargs):
    if 'id_pyme' not in kwargs or kwargs.get('id_pyme') == "":
        raise Http404
    
    if 'id_asesor' not in kwargs or kwargs. get('id_asesor0') == "":
        raise Http404
    
    id_pyme = int(kwargs.get('id_pyme'))
    id_asesor = int(kwargs['id_asesor'])

    pa = Pyme_Asesor.objects.create(id_pyme = id_pyme, id_asesor= id_asesor)
    pa.fecha_contratacion = datetime.strptime(kwargs['fecha_contratacion']
        ) if 'fecha_contratacion' in kwargs and kwargs[
            'fecha_contratacion'] != "" else None 
    pa.departamento = kwargs['departamento'] if 'departamento' in kwargs else None
    pa.modalidad_contratacion = kwargs['modalidad_contratacion'] if 'modalidad_contratacion' in kwargs else None
    pa.save()
    return Pyme_AsesorSerializer(pa).data


### Update ###
def updatePyme(*args, **kwargs):
    if 'id' not in kwargs or type(kwargs.get('id')) != int:
        raise Http404
    
    id_pyme = int(kwargs.get('id'))
    p = Pyme.objects.get(id = id_pyme)
    p.rut = kwargs.get('rut') if 'rut' in kwargs else None
    p.direccion = kwargs.get('direccion') if 'direccion' in kwargs else None
    p.telefono = kwargs.get('telefono') if 'telefono' in kwargs else None
    p.nombre = kwargs.get('nombre') if 'nombre' in kwargs else None
    p.correo = kwargs.get('correo') if 'correo' in kwargs else None
    p.save()
    return PymeSerializer(p).data

def updateAsesor(*args, **kwargs):
    if 'id' not in kwargs or type(kwargs.get('id')) != int:
        raise Http404
    
    id_asesor = int(kwargs.get('id'))
    a = Asesor.objects.get(id = id_asesor)
    a.nombre = kwargs.get('nombre') if 'nombre' in kwargs else None 
    a.rut = kwargs.get('rut') if 'rut' in kwargs else None 
    a.telefono = kwargs.get('telefono') if 'telefono' in kwargs else None 
    a.correo = kwargs.get('correo') if 'correo' in kwargs else None
    a.save()
    return AsesorSerializer(a).data

def updatePyme_Asesor(*args, **kwargs):
    if 'id' not in kwargs or type(kwargs.get('id')) != int:
        raise Http404
    
    id_pyme_asesor = int(kwargs.get('id'))
    pa = Pyme_Asesor.objects.get(id = id_pyme_asesor)
    pa.fecha_contratacion = datetime.strptime(kwargs['fecha_contratacion']
        ) if 'fecha_contratacion' in kwargs and kwargs[
            'fecha_contratacion'] != "" else None 
    pa.departamento = kwargs['departamento'] if 'departamento' in kwargs else None
    pa.modalidad_contratacion = kwargs['modalidad_contratacion'] if 'modalidad_contratacion' in kwargs else None
    pa.save()
    return Pyme_AsesorSerializer(pa).data


### Delete ###
def deletePyme(id = None):
    if id is None:
        raise Http404
    
    try:
        id = int(id)
        p = Pyme.objects.get(id = id)
        p.delete()
    except Exception as e:
        print(e)
        raise Http404

def deleteAsesor(id = None):
    if id is None:
        raise Http404
    
    try:
        id = int(id)
        p = Asesor.objects.get(id = id)
        p.delete()
    except Exception as e:
        print(e)
        raise Http404
    
def deletePyme_Asesor(id = None):
    if id is None:
        raise Http404
    
    try:
        id = int(id)
        p = Pyme_Asesor.objects.get(id = id)
        p.delete()
    except Exception as e:
        print(e)
        raise Http404
