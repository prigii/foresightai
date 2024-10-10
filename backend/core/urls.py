# backend/core/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Define a view for the home page
    # You can add other URL patterns here
]
