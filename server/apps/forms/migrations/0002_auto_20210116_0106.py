# Generated by Django 3.1.5 on 2021-01-16 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adeiaeidikoyskopoy',
            name='status',
            field=models.SmallIntegerField(choices=[(-1, 'Not Approved'), (0, 'Pending'), (1, 'Approved')], default=0),
        ),
    ]
