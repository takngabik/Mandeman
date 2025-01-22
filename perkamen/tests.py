from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status

class HaluAPITests(APITestCase):
    def setUp(self):
        self.halu_url = reverse('halu')

    def test_get_halu_message(self):
        response = self.client.get(self.halu_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'halu dunia')
        self.assertEqual(response['content-type'], 'application/json')
