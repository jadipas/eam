from django.urls import path
from apps.forms import views

urlpatterns = [
    path('myforms', views.MyFormsView.as_view()),
    path('adeiaeidikoyskopoy', views.AdeiaEidikoySkopoyView.as_view()),
    path('adeiaeidikoyskopoy_update/<int:form_id>', views.AdeiaEidikoySkopoyUpdateView.as_view()),
    path('adeiaergasias', views.AdeiaErgasiasView.as_view()),
    path('anastoliergasias', views.AnastoliErgasiasView.as_view())
]