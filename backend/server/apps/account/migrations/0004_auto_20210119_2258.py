# Generated by Django 3.1.5 on 2021-01-19 22:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_remove_user_has_child_under_12'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='account.company'),
        ),
    ]
