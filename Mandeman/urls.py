from django.contrib import admin
from django.urls import path, include

from perkamen.views import ReactView

urlpatterns = [
    path("", ReactView.as_view(), name='index'),
    path('api/', include('perkamen.urls')),
]
