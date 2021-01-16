from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class Company(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    
    class Meta:
        db_table = 'company'
    
    def __str__(self):
        return self.name

        
class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, amka, afm, email, name, phone, password, role, **extra_fields):
        values = [email, name, phone]
        field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))
        for field_name, value in field_value_map.items():
            if not value:
                raise ValueError('The {} value must be set'.format(field_name))
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            name=name,
            phone=phone,
            amka=amka, 
            afm=afm,
            username=username,
            role=role,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, amka, afm, email, name, phone, password, role, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)           

        return self._create_user(username, amka, afm, email, name, phone, password, role, **extra_fields)

    def create_superuser(self, username, amka, afm, email, name, phone, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, amka, afm, email, name, phone, password, role='admin', **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    ADMIN = 'admin'
    EMPLOYER = 'employer'
    EMPLOYEE = 'employee'

    ROLE_CHOICES = (
        (ADMIN, 'Admin'),
        (EMPLOYER, 'Employer'),
        (EMPLOYEE, 'Employee')
    )
    amka = models.CharField(max_length=10, unique=True)
    afm = models.CharField(max_length=10, unique=True)
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50, unique=True)
    date_of_birth = models.DateField(blank=True, null=True)
    role = models.CharField(max_length=50, choices = ROLE_CHOICES)
    is_staff = models.BooleanField(default=False)
    company = models.ForeignKey(Company, on_delete=models.RESTRICT, blank=True, null=True)
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name' 'email', 'phone', 'amka', 'afm']
    
    
    objects = UserManager()

    class Meta:
        db_table = 'user'

    def __str__(self):
        return self.username