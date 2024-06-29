from django.urls import path
from api.core.apiviews import PersonaView, ListPersona, schema_view

urlpatterns = [
    
    path('get/Persona/<persona_id>/', PersonaView.as_view()),
    path('post/Persona/', PersonaView.as_view()),
    path('delete/Persona/<persona_id>/', PersonaView.as_view()),
    path('get/list/Persona/', ListPersona.as_view()),
    path(r'', schema_view)
]
