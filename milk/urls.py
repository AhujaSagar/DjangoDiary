from django.urls import path

from . import views

from .views import index,show,retrieve,pay,post,delete,analyse,orderpay
from django.conf import settings


urlpatterns = [
    path('', index, name='index'),
    path('show', show, name='show'),
    path('retrieve', retrieve, name='retrieve'),
    path('orderpay', orderpay, name='pay'),
    path('pay', pay, name='pay'),
    path('post', post, name='post'),
    path('rem', delete, name='kh'),
    path('total', analyse, name='all'),
]
# if not settings.DEBUG:
#     urlpatterns += patterns('',
#         (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
#     )