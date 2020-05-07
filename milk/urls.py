from django.urls import path

from . import views

from .views import index,show,retrieve,pay,post
from django.conf import settings


urlpatterns = [
    path('', index, name='index'),
    path('show', show, name='show'),
    path('retrieve', retrieve, name='retrieve'),
    path('pay', pay, name='pay'),
    path('post', post, name='post'),
]
if not settings.DEBUG:
    urlpatterns += patterns('',
        (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
    )