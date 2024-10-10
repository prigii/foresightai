# core/views.py

from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Forecast
from django.contrib.auth.models import User
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import render

def home(request):
    return render(request, 'core/home.html')

# File upload view
class FileUploadView(generics.CreateAPIView):
    queryset = Forecast.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')
        user = request.user
        forecast = Forecast.objects.create(user=user, file=file)
        return Response({"message": "File uploaded successfully!"})
