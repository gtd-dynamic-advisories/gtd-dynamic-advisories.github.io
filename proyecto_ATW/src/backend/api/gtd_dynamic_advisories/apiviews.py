from tokenize import Token 
from rest_framework import status, viewsets
from rest_framework.views import APIView 
from rest_framework.response import Response 
from apps.gtd_dynamic_advisories import utils, serializers
from rest_framework_swagger.views import get_swagger_view

from drf_yasg.utils import swagger_auto_schema
    
class PymeViewSet(viewsets.ViewSet):
    serializer_class = serializers.PymeSerializer
    def get(self, request, id):
        try:
            respose = utils.getPyme(id)
            status_code = status.HTTP_404_NOT_FOUND if not respose else status.HTTP_200_OK
            return Response(respose, status_code)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
    
    def post(self, request):
        try:
            response = utils.createPyme(request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, id):
        try:
            response = utils.updatePyme(id, request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, id):
        try:
            utils.deletePyme(id)
            return Response(status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOURD)
        
    def getAll(self, request):
        try:
            breakpoint()
            response = utils.getAllPymes(request=request)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        
        
class AsesorView(APIView):
    serializer_class = serializers.AsesorSerializer
    def get(self, request, id):
        try:
            respose = utils.getAsesor(id)
            status_code = status.HTTP_404_NOT_FOUND if not respose else status.HTTP_200_OK
            return Response(respose, status_code)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    @swagger_auto_schema(request_body=serializers.AsesorSerializer)
    def post(self, request, id):
        try:
            response = utils.createAsesor(request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, id):
        try:
            response = utils.updateAsesor(id, request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, id):
        try:
            utils.deleteAsesor(id)
            return Response(status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOURD)
        
    def getAll(self, request):
        try:
            response = utils.getAllAsesors(request=request)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        

class Pyme_AsesorView(APIView):
    def get(self, request, id):
        try:
            respose = utils.getPyme_Asesor(id)
            status_code = status.HTTP_404_NOT_FOUND if not respose else status.HTTP_200_OK
            return Response(respose, status_code)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def post(self, request, id):
        try:
            response = utils.createPyme_Asesor(request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, id):
        try:
            response = utils.updatePyme_Asesor(id, request.data)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, id):
        try:
            utils.deletePyme_Asesor(id)
            return Response(status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_404_NOT_FOURD)
        
    def getAll(self, request):
        try:
            response = utils.getAllPyme_Asesors(request=request)
            return Response(response, status.HTTP_200_OK)
        
        except Exception as e:
            return Response(e, status.HTTP_400_BAD_REQUEST)


schema_view = get_swagger_view(title='Pastebin API')
