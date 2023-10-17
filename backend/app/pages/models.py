from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

# Create your models here.

class React(models.Model):
	name = models.CharField(max_length=30)
	detail = models.CharField(max_length=500)

# # Create or update user with hashed password
# password = ""  # Replace this with the user's actual password
# hashed_password = make_password(password)
# user = User.objects.create(username="username", password=hashed_password)

# # Alternatively, if updating an existing user's password
# user.password = make_password(new_password)
# user.save()