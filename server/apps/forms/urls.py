from django.urls import path
from apps.forms import views

urlpatterns = [
    path('adeiaeidikoyskopoy', views.AdeiaEidikoySkopoyView.as_view()),
   
]