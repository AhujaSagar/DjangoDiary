from django.shortcuts import render
from django.http import HttpResponse
from .models import Order
from django.http import JsonResponse      
import json
from datetime import date

def index(request):   
    return render(request, 'index.html', {})   
    

def show(request):
    order = Order.objects.all().order_by('flat')
    return render(request, 'show.html', {'order':order})   

def retrieve(request):
    response_data = {}
   
    if request.POST.get('action') == 'post':	
        name = request.POST.get('name')
        mobile = request.POST.get('mobile')
        flat = request.POST.get('flat')
        choice = request.POST.get('choice')
        qty = request.POST.get('qty')
        price = request.POST.get('price')
        society = request.POST.get('society')

        
        response_data['name'] = name
        response_data['qty'] = qty

        Order.objects.create(
        name = name,
        mobile= mobile,
        flat= flat,
        milk_choice= choice,
        quantity= qty,
        society=society,
        price=price,
        status="unpaid"
        ) 

    order = Order.objects.filter(mobile=request.POST.get('mobile'))
    return render(request, 'previous.html', {'order':order}) 
    

def pay(request):
    response_data = {}

    if request.POST.get('action') == 'post':
        temp=Order.objects.get(id = request.POST.get('id'))
        temp.status = 'Paid'
        temp.save()
        response_data['id'] = request.POST.get('id')
        return JsonResponse(response_data)
        