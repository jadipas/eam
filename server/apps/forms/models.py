from django.db import models
from apps.account.models import User

class AdeiaEidikoySkopoy(models.Model):
    from_time = models.DateField()
    to_time = models.DateField()
    employer = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='employer')
    employee = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='employee')