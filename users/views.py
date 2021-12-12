from rest_framework.viewsets import ModelViewSet
from .serializers import UsersSerializer
from users.models import Users


class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
