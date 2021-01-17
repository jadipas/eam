from django.urls import path
from apps.authentication import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('profile', views.ProfileView.as_view()),
    path('update_profile', views.UpdateProfileView.as_view()),
    path('update_password', views.UpdatePasswordView.as_view()),
    path('logout/blacklist/', views.BlacklistTokenUpdateView.as_view()),
    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]