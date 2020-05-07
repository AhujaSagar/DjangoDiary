from django.shortcuts import render
from django.http import HttpResponse
from .models import Order
from django.http import JsonResponse      
import json
from datetime import date

def index(request):   
    if 'mobile' in request.COOKIES:
        name=request.COOKIES['name']
        return render(request, 'order.html', {'name':name}) 
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
    response= render(request, 'previous.html', {'order':order})   
    response.set_cookie('mobile',value=request.POST.get('mobile'),expires ="Mon, 03 Aug 2020 07:51:53 GMT" ) 
    response.set_cookie('flat',value=request.POST.get('flat'),expires ="Mon, 03 Aug 2020 07:51:53 GMT" ) 
    response.set_cookie('society',value=request.POST.get('society'),expires ="Mon, 03 Aug 2020 07:51:53 GMT" ) 
    response.set_cookie('name',value=request.POST.get('name'),expires ="Mon, 03 Aug 2020 07:51:53 GMT" ) 
    return response

def post(request):
    response_data = {}
   
    if request.POST.get('action') == 'post':	
        mobile  = request.COOKIES['mobile']
        society  = request.COOKIES['society']
        flat  = request.COOKIES['flat']
        name  = request.COOKIES['name']
        choice = request.POST.get('choice')
        qty = request.POST.get('qty')
        price = request.POST.get('price')
    
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

    order = Order.objects.filter(mobile=request.COOKIES['mobile'])
    return render(request, 'previous.html', {'order':order}) 

def pay(request):
    response_data = {}

    if request.POST.get('action') == 'post':
        temp=Order.objects.get(id = request.POST.get('id'))
        temp.status = 'Paid'
        temp.save()
        response_data['id'] = request.POST.get('id')
        return JsonResponse(response_data)
        
def delete(request):
    response_data = {}

    Order.objects.all().delete()
    return HttpResponse('done')