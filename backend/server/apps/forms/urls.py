from django.urls import path
from apps.forms import views

urlpatterns = [
    path('myforms', views.MyFormsView.as_view()),
    path('adeiaeidikoyskopoy', views.AdeiaEidikoySkopoyView.as_view()),
    path('adeiaeidikoyskopoy/<int:form_id>', views.AdeiaEidikoySkopoyByIdView.as_view()),
    path('adeiaergasias', views.AdeiaErgasiasView.as_view()),
    path('adeiaergasias/<int:form_id>', views.AdeiaErgasiasByIdView.as_view()),
    path('anastoliergasias', views.AnastoliErgasiasView.as_view()),
    path('anastoliergasias/<int:form_id>', views.AnastoliErgasiasByIdView.as_view())
]