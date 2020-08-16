from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=100, unique=True)
    price = models.FloatField()
    available = models.BooleanField(default=True)
