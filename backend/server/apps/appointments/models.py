from django.db import models
from apps.account.models import User

# Create your models here.
class Appointment(models.Model):

    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    email = models.EmailField()
    phone = models.CharField(max_length=50, unique=True)
    date = models.DateField()
    time = models.TimeField()

    class Meta:
        db_table = 'appointment'
        unique_together = ('date', 'time')
