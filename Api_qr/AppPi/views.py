from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import perfil_usuarioSerializer
from .models import perfil_usuario

@api_view(['GET', 'POST'])
def lista_usuarios(request):
    if request.method == 'GET':
        users = perfil_usuario.objects.all()
        serializer = perfil_usuarioSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data
        correo = data.get('correo')
        existing_user = perfil_usuario.objects.filter(correo=correo).first()
        if existing_user:
            return Response({'error': 'Ya existe un usuario con este correo electrónico.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = perfil_usuarioSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)