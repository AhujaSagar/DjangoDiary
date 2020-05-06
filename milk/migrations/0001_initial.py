# Generated by Django 2.1 on 2020-05-06 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('flat', models.IntegerField()),
                ('mobile', models.IntegerField()),
                ('milk_choice', models.CharField(max_length=40)),
                ('quantity', models.FloatField()),
                ('society', models.CharField(max_length=40)),
                ('date', models.DateTimeField(auto_now=True)),
                ('price', models.IntegerField()),
                ('status', models.CharField(max_length=10)),
            ],
        ),
    ]
