from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from .serializer import FactSerializer
from .models import Fact

# Create your views here.
class FactView(viewsets.ModelViewSet):
    serializer_class = FactSerializer
    queryset = Fact.objects.all()

class FactFiltered(APIView):
    permission_classes = (permissions.AllowAny, )
    authentication_classes = (SessionAuthentication, )

    def get(self, request):
        generation = request.query_params.get('generation', None)
        facts = Fact.objects.all()

        if generation:
            facts = facts.filter(generation=generation)

        serializer = FactSerializer(facts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)