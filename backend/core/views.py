# core/views.py

from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Forecast
from django.contrib.auth.models import User
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.files.storage import FileSystemStorage
import pandas as pd
from django.http import JsonResponse
import subprocess

# def home(request):
#     return render(request, 'core/home.html')

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
# File upload view
@api_view(['POST'])
def upload_data(request):
    if request.method == 'POST' and request.FILES['file']:
        file = request.FILES['file']
        fs = FileSystemStorage()
        filename = fs.save(file.name, file)
        uploaded_file_url = fs.url(filename)

        # Load and process the file (assuming CSV for now)
        df = pd.read_csv(file)
        # Perform your analysis here and save results to the database

        return Response({'file_url': uploaded_file_url}, status=status.HTTP_201_CREATED)
    
    def run_analysis(request):
    # Assuming the analysis is done using a script called `analyze.py`
        try:
            result = subprocess.run(['python', 'analyze.py'], capture_output=True, text=True)
            return JsonResponse({'output': result.stdout})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)