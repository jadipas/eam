from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('apps.authentication.urls')),
    path('forms/', include('apps.forms.urls')),
    path('appointments/', include('apps.appointments.urls'))
]