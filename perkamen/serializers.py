from rest_framework import serializers

class HaluSerializer(serializers.Serializer):
    message = serializers.CharField(default="halu dunia")
