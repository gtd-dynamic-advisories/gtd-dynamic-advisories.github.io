from django.urls import path
from api.gtd_dynamic_advisories.apiviews import schema_view, PymeViewSet, AsesorViewSet, Pyme_AsesorViewSet

urlpatterns = [
    
    path('Pymes/<persona_id>/', PymeViewSet.as_view({'get': 'get', 'delete': 'delete', 'put': 'put'})),
    path('Pymes/', PymeViewSet.as_view({'get': 'getAll', 'post': 'post'})),
    
    path('Asesors/<persona_id>/', AsesorViewSet.as_view({'get': 'get', 'delete': 'delete', 'put': 'put'})),
    path('Asesors/', AsesorViewSet.as_view({'get': 'getAll', 'post': 'post'})),
    
    path('Pyme_Asesors/<persona_id>/', Pyme_AsesorViewSet.as_view({'get': 'get', 'delete': 'delete', 'put': 'put'})),
    path('Pyme_Asesors/', Pyme_AsesorViewSet.as_view({'get': 'getAll', 'post': 'post'})),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
