# core/models.py

from django.db import models
from django.contrib.auth.models import User

class Forecast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to='uploads/')  # Field for CSV/Excel files
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Forecast by {self.user.username} on {self.created_at}"
