import logging
import traceback
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.forms.models import AdeiaEidikoySkopoy
from apps.forms.serializers import  AdeiaEidikoySkopoySerializer
from rest_framework.permissions import IsAuthenticated

class AdeiaEidikoySkopoyView(APIView):
    
    permission_classes = (IsAuthenticated,)
    serializer_class = AdeiaEidikoySkopoySerializer 
    
    def post(self, request):
        
        try:
            return Response(status=status.HTTP_200_OK)

        except Exception:
            logging.error("Error creating a form of AdeiaEidikoySkopoy: {}".format(traceback.format_exc()))
            return Response("Server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)