from django.db import models
from apps.account.models import User, Company
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField


class Form(models.Model):
  

    
    from_time = models.DateField()
    to_time = models.DateField()
    employee = models.ForeignKey(User, on_delete=models.RESTRICT)
    company = models.ForeignKey(Company, on_delete=models.RESTRICT)
    created_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        abstract=True
        unique_together = [['employee', 'from_time'], ['employee', 'to_time']]


class AdeiaEidikoySkopoy(Form):
    STATUS_CHOICES = (
        (-1, 'Not Approved'),
        (0, 'Pending'),
        (1, 'Approved')
    )
    children = ArrayField(models.JSONField())
    status = models.SmallIntegerField(choices = STATUS_CHOICES, default=0)

    class Meta:
        db_table = 'adeia_eidikoy_skopoy'

class AdeiaErgasias(Form):
    
    class Meta:
        db_table = 'adeia_ergasias'

class AnastoliErgasias(Form):
    
    class Meta:
        db_table = 'anastoli_ergasias'