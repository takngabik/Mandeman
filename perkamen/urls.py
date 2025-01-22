from django.urls import path
from .views import HaluView

urlpatterns = [
    path('halu/', HaluView.as_view(), name='halu'),
]
