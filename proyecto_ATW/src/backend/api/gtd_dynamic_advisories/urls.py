from django.urls import path
from api.gtd_dynamic_advisories.apiviews import schema_view, PymeViewSet, AsesorView, Pyme_AsesorView

urlpatterns = [
    
    path('Pymes/<persona_id>/', PymeViewSet.as_view({'get': 'get', 'delete': 'delete', 'put': 'put'})),
    path('Pymes/', PymeViewSet.as_view({'get': 'getAll', 'post': 'post'})),
    
    path('Asesors/<persona_id>/', AsesorView.as_view()),
    path('Asesors/', AsesorView.as_view()),
    
    path('Pyme_Asesors/<persona_id>/', Pyme_AsesorView.as_view()),
    path('Pyme_Asesors/', Pyme_AsesorView.as_view()),
    path(r'', schema_view)
]
