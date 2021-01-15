from django.urls import path
from apps.forms import views

urlpatterns = [
    path('myforms', views.MyFormsView.as_view()),
    path('adeiaeidikoyskopoy', views.AdeiaEidikoySkopoyView.as_view()),
   
]