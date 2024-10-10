# backend/core/urls.py
from django.urls import path
from . import views
from .views import signup, login, upload_data

urlpatterns = [
    # path('', views.home, name='home'),  # Define a view for the home page
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('upload/', upload_data, name='upload_data'),
]
