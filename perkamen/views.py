from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import HaluSerializer


class ReactView(TemplateView):
    template_name = 'index.html'


class HaluView(APIView):
    def get(self, request):
        data = {'message': 'halu dunia'}
        serializer = HaluSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)
