from django.db import models
from django.urls import reverse

# Create your models here.

class Order(models.Model):
    name = models.CharField(max_length=200)
    flat = models.IntegerField()
    mobile = models.CharField(max_length=14)
    milk_choice = models.CharField(max_length=40)
    quantity = models.FloatField()
    society= models.CharField(max_length=40)
    date= models.DateTimeField(auto_now_add=True)
    price= models.IntegerField()
    status=models.CharField(max_length=10)

