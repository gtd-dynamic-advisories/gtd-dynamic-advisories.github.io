from apps.gtd_dynamic_advisories.models import Pyme, Asesor, Pyme_Asesor
from apps.gtd_dynamic_advisories.serializers import PymeSerializer, AsesorSerializer, Pyme_AsesorSerializer
from django.http import Http404
from datetime import datetime

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
def createPyme(args, **kwargs):
    p = Pyme.objects.create()
    p.rut = args.get('rut') if 'rut' in args else None
    p.direccion = args.get('direccion') if 'direccion' in args else None
    p.telefono = args.get('telefono') if 'telefono' in args else None
    p.nombre = args.get('nombre') if 'nombre' in args else None
    p.correo = args.get('correo') if 'correo' in args else None
    p.save()
    return PymeSerializer(p).data


def createAsesor(args, **kwargs):
    a = Asesor.objects.create()
    a.nombre = args.get('nombre') if 'nombre' in args else None 
    a.rut = args.get('rut') if 'rut' in args else None 
    a.telefono = args.get('telefono') if 'telefono' in args else None 
    a.correo = args.get('correo') if 'correo' in args else None
    print("Asesor {}: {}, {}, {}, {}".format(a, a.id, a.nombre, a.rut, a.telefono, a.correo))
    a.save()
    return AsesorSerializer(a).data


def createPyme_Asesor(args, **kwargs):
    if 'id_pyme' not in args or args.get('id_pyme') == "":
        raise Http404
    
    if 'id_asesor' not in args or args. get('id_asesor') == "":
        raise Http404
    
    id_pyme = int(args.get('id_pyme'))
    p = Pyme.objects.get(id = id_pyme)
    
    id_asesor = int(args.get('id_asesor'))
    a = Asesor.objects.get(id = id_asesor)

    pa = Pyme_Asesor.objects.create(id_pyme = p, id_asesor= a)
    pa.fecha_contratacion = datetime.strptime(args.get('fecha_contratacion'), "%Y-%m-%d"
        ).date() if 'fecha_contratacion' in args and args.get(
            'fecha_contratacion') != "" else None 
    pa.departamento = args.get('departamento') if 'departamento' in args else None
    pa.modalidad_contratacion = args.get('modalidad_contratacion') if 'modalidad_contratacion' in args else None
    pa.save()
    return Pyme_AsesorSerializer(pa).data


### Update ###
def updatePyme(id_pyme, args, **kwargs):
    if id_pyme is None:
        raise Http404
    
    try:
        id_pyme = int(id_pyme)
    except Exception as e:
        raise Http404
    
    p = Pyme.objects.get(id = id_pyme)
    p.rut = args.get('rut') if 'rut' in args else None
    p.direccion = args.get('direccion') if 'direccion' in args else None
    p.telefono = args.get('telefono') if 'telefono' in args else None
    p.nombre = args.get('nombre') if 'nombre' in args else None
    p.correo = args.get('correo') if 'correo' in args else None
    p.save()
    return PymeSerializer(p).data

def updateAsesor(id_asesor, args, **kwargs):
    if id_asesor is None:
        raise Http404
    
    try:
        id_asesor = int(id_asesor)
    except Exception as e:
        raise Http404
    
    a = Asesor.objects.get(id = id_asesor)
    a.nombre = args.get('nombre') if 'nombre' in args else None 
    a.rut = args.get('rut') if 'rut' in args else None 
    a.telefono = args.get('telefono') if 'telefono' in args else None 
    a.correo = args.get('correo') if 'correo' in args else None
    a.save()
    return AsesorSerializer(a).data

def updatePyme_Asesor(pyme_asesor_id, args, **kwargs):
    if pyme_asesor_id is None:
        raise Http404
    
    try:
        pyme_asesor_id = int(pyme_asesor_id)
    except Exception as e:
        raise Http404
    id_pyme_asesor = int(pyme_asesor_id)
    pa = Pyme_Asesor.objects.get(id = id_pyme_asesor)
    if 'id_pyme' in args and args.get('id_pyme') != "":
        p = Pyme.objects.get(id = int(args.get('id_pyme')))
        pa.id_pyme = p
    
    if 'id_asesor' in args and args.get('id_asesor') != "":
        a = Asesor.objects.get(id = int(args.get('id_asesor')))
        pa.id_asesor = a

    pa.fecha_contratacion = datetime.strptime(args.get('fecha_contratacion'), "%Y-%m-%d"
        ).date() if 'fecha_contratacion' in args and args.get(
            'fecha_contratacion') != "" else None 
    pa.departamento = args.get('departamento') if 'departamento' in args else None
    pa.modalidad_contratacion = args.get('modalidad_contratacion') if 'modalidad_contratacion' in args else None
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
