# Generated by Django 5.0.6 on 2024-07-03 07:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Asesor',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('rut', models.CharField(max_length=10)),
                ('telefono', models.CharField(max_length=15)),
                ('correo', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Pyme',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('rut', models.CharField(max_length=10)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=15)),
                ('nombre', models.CharField(max_length=40)),
                ('correo', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Pyme_Asesor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_contratacion', models.DateField()),
                ('departamento', models.CharField(max_length=20)),
                ('modalidad_contratacion', models.CharField(choices=[('ONLINE', 'online'), ('PRESENCIAL', 'presencial'), ('TELEFONICA', 'telefonica'), ('OTRA', 'otra')], default='PRESENCIAL', max_length=10)),
                ('id_asesor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gtd_dynamic_advisories.asesor')),
                ('id_pyme', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gtd_dynamic_advisories.pyme')),
            ],
        ),
    ]
