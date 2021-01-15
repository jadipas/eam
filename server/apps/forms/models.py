from django.db import models
from apps.account.models import User, Company



class Form(models.Model):
    from_time = models.DateField()
    to_time = models.DateField()
    employee = models.ForeignKey(User, on_delete=models.RESTRICT)
    company = models.ForeignKey(Company, on_delete=models.RESTRICT)

    class Meta:
        abstract=True
        unique_together = [['employee', 'from_time'], ['employee', 'to_time']]


class AdeiaEidikoySkopoy(Form):
    
    class Meta:
        db_table = 'adeia_eidikoy_skopoy'

class AdeiaErgasias(Form):
    
    class Meta:
        db_table = 'adeia_ergasias'