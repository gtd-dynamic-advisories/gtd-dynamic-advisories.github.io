# Generated by Django 5.0.6 on 2024-06-27 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_persona_avatar_persona_ciudad_persona_f_nacimiento'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='avatar',
            field=models.FileField(default='avatars/default.jpg', upload_to='avatars/'),
        ),
    ]
