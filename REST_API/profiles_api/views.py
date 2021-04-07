from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status

from profiles_api import serializers

class HelloApiView(APIView):
    """Clase de Api VIew de prueba"""

    serializer_class = serializers.HelloSerializer



    def get(self, request, format=None):
        """Retornar lista de caracterisitcas del APIVew"""

        an_apiview = [
            'usamos metodos HTTP como funciones (get, post, put, delete)',
            'es similar a una vista tradicional de Django',
            'nos da el mayor control sobre la logica de uestra aplicacion',
            'esta mapeado manualmente a los URLs'
        ]

        return Response({'message' :'Hello', 'an_apiview': an_apiview})


    def post(self, request):
        """Crea un mensaje cn nuestro nombre"""

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            message = f'Hello {name}'
            return Response({'message': message})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

    def put(self, request, pk=None):
        """Maneja actualizar un objeto"""

        return Response({'method': 'PUT'})

    def patch(self, request, pk=None):
        """Maneja Actualizacion parcial de un objeto"""

        return Response({'method':'PATCH'})

    def delete(self, request, pk=None):

        return Response({'method': 'DELETE'})

# Create your views here.
