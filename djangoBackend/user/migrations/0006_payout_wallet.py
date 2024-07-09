# Generated by Django 5.0.6 on 2024-07-09 01:37

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_profile_left_child_profile_parent_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payout',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('payment_method', models.CharField(choices=[('bank_transfer', 'Bank Transfer'), ('paypal', 'PayPal'), ('credit_card', 'Credit Card')], max_length=20)),
                ('status', models.CharField(choices=[('paid', 'Paid'), ('pending', 'Pending')], default='pending', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('description', models.TextField()),
                ('status', models.CharField(choices=[('successful', 'Successful'), ('declined', 'Declined')], max_length=50)),
            ],
        ),
    ]