from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class AppUserManager(BaseUserManager):
	def create_user(self, email, password=None, **args):
		if not email:
			raise ValueError('El email debe ser proporcionado.')
		email = self.normalize_email(email)
		user = self.model(email=email, **args)
		user.set_password(password)
		user.save(using=self._db)
		return user
	
	def create_superuser(self, email, password=None, **args):
		args.setdefault('is_staff', True)
		args.setdefault('is_superuser', True)
		return self.create_user(email, password, **args)

class AppUser(AbstractBaseUser, PermissionsMixin):
	GENERATIONS = [
        ('B','Baby boomers'),
        ('X','Generación X'),
        ('M','Millennials'),
        ('Z','Generación Z'),
        ('A','Generación Alpha'),
    ]

	email = models.EmailField(unique=True)
	generation = models.CharField(max_length=1, choices=GENERATIONS)
	username = models.CharField(max_length=50)
	is_active = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['generation']
	
	objects = AppUserManager()

	def __str__(self):
		return self.username
	
	def has_perm(self, perm, obj=None):
		return self.is_superuser
	
	def has_module_perms(self, app_label):
		return self.is_superuser