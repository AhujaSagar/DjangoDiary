from django.urls import path

from . import views

from .views import index,show,retrieve,pay,post

urlpatterns = [
    path('', index, name='index'),
    path('show', show, name='show'),
    path('retrieve', retrieve, name='retrieve'),
    path('pay', pay, name='pay'),
    path('post', post, name='post'),
]