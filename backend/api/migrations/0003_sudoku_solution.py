# Generated by Django 4.2.9 on 2024-03-11 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_todoitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='sudoku',
            name='solution',
            field=models.TextField(blank=True, null=True),
        ),
    ]
