from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
#from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, 
from rest_framework import permissions, status

from .serializers import AppUserSerializer, UserLoginSerializer

class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	
	def post(self, request):
		#Podria validar datos y darle al serializar clean_data = custom_validation(request.data)
		serializer = AppUserSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.save() #create(request.data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	
	def post(self, request):
		#Podria validar datos y darle al serializar clean_data = custom_validation(request.data)
		serializer = UserLoginSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(request.data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	
	def get(self, request):
		serializer = AppUserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
