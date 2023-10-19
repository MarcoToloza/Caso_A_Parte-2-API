from rest_framework import serializers
from .models import perfil_usuario


class perfil_usuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=perfil_usuario
        fields = '__all__'