from rest_framework.viewsets import ModelViewSet
from .serializers import UsersSerializer
from users.models import User


class UsersViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
