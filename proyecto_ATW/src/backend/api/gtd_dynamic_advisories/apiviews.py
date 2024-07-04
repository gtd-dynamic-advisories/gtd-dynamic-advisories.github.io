from tokenize import Token 
from rest_framework import status, viewsets
from rest_framework.parsers import JSONParser 
from rest_framework.response import Response 
from apps.gtd_dynamic_advisories import utils, serializers
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from drf_yasg.utils import swagger_auto_schema
    
class PymeViewSet(viewsets.ViewSet):
    def get(self, request, pyme_id):
        try:
            respose = utils.getPyme(pyme_id)
            status_code = status.HTTP_404_NOT_FOUND if not respose else status.HTTP_200_OK
            return Response(respose, status_code)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
    
    @swagger_auto_schema(request_body=serializers.PymeSerializer)
    def post(self, request):
        try:
            response = utils.createPyme(request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
    
    @swagger_auto_schema(request_body=serializers.PymeSerializer)
    def put(self, request, pyme_id):
        try:
            response = utils.updatePyme(pyme_id, request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, pyme_id):
        try:
            utils.deletePyme(pyme_id)
            return Response(status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOURD)
        
    def getAll(self, request):
        try:
            response = utils.getAllPymes(request=request)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        
        
class AsesorViewSet(viewsets.ViewSet):
    def get(self, request, asesor_id):
        try:
            respose = utils.getAsesor(asesor_id)
            status_code = status.HTTP_404_NOT_FOUND if not respose else status.HTTP_200_OK
            return Response(respose, status_code)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    @swagger_auto_schema(request_body=serializers.AsesorSerializer)
    def post(self, request):
        try:
            response = utils.createAsesor(request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
    
    @swagger_auto_schema(request_body=serializers.AsesorSerializer)
    def put(self, request, asesor_id):
        try:
            response = utils.updateAsesor(asesor_id, request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, asesor_id):
        try:
            utils.deleteAsesor(asesor_id)
            return Response(status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOURD)
        
    def getAll(self, request):
        try:
            response = utils.getAllAsesors(request=request)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        

class Pyme_AsesorViewSet(viewsets.ViewSet):
    def get(self, request, pyme_asesor_id):
        try:
            respose = utils.getPyme_Asesor(pyme_asesor_id)
            status_code = status.HTTP_404_NOT_FOUND if not respose else status.HTTP_200_OK
            return Response(respose, status_code)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    @swagger_auto_schema(request_body=serializers.Pyme_AsesorSerializer)
    def post(self, request):
        try:
            response = utils.createPyme_Asesor(request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        
    @swagger_auto_schema(request_body=serializers.Pyme_AsesorSerializer)
    def put(self, request, pyme_asesor_id):
        try:
            response = utils.updatePyme_Asesor(pyme_asesor_id, request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, pyme_asesor_id):
        try:
            utils.deletePyme_Asesor(pyme_asesor_id)
            return Response(status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def getAll(self, request):
        try:
            response = utils.getAllPyme_Asesors(request=request)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)


schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)
