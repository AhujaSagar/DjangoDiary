from django.urls import path

from . import views

from .views import index,show,retrieve,pay

urlpatterns = [
    path('', index, name='index'),
    path('show', show, name='show'),
    path('retrieve', retrieve, name='retrieve'),
    path('pay', pay, name='pay'),
    # path('set', setcookie, name='setcookie'),
    # path('get', getcookie, name='getcookie'),

]