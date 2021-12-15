from django.db import models
from django.contrib.auth.models import AbstractUser


class Users(AbstractUser):
    nickname = models.CharField(max_length=100, verbose_name='Ник-нейм')
    first_name = models.CharField(max_length=100, blank=True, verbose_name='Имя')
    last_name = models.CharField(max_length=100, blank=True, verbose_name='Фамилия')
    email = models.EmailField(max_length=50, unique=True, verbose_name='Email')

    class Meta:
        verbose_name_plural = 'Пользователи'
        verbose_name = 'Пользователь'
        ordering = ['-nickname']
