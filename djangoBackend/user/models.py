import uuid

from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='profile_photos/', null=True, blank=True)
    business_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=20)
    left_child = models.OneToOneField('self', null=True, blank=True, related_name='left', on_delete=models.SET_NULL)
    right_child = models.OneToOneField('self', null=True, blank=True, related_name='right', on_delete=models.SET_NULL)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.SET_NULL)

    def __str__(self):
        return self.user.username

    def get_pairs(self):
        left_pairs = self._get_pairs(self.left_child)
        right_pairs = self._get_pairs(self.right_child)
        return min(left_pairs, right_pairs)

    def _get_pairs(self, node):
        if not node:
            return 0
        left_pairs = self._get_pairs(node.left_child)
        right_pairs = self._get_pairs(node.right_child)
        return 1 + left_pairs + right_pairs

    def calculate_matching_bonus(self):
        pairs = self.get_pairs()
        max_pairs_per_day = 20
        pair_bonus = 3000  # Assuming the bonus amount per pair is N3000
        daily_bonus = min(pairs, max_pairs_per_day) * pair_bonus
        return daily_bonus


class Product(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='product_photos/', null=True, blank=True)
    status = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    shares = models.IntegerField(default=0, blank=True)
    traffic = models.IntegerField(default=0, blank=True)
    phone_no = models.CharField(max_length=15, blank=True)
    link = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.name


class SupportTicket(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    subject = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=[
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved')
    ])
    priority = models.CharField(max_length=50, choices=[
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High')
    ])
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.subject


class Wallet(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    status = models.CharField(max_length=50, choices=[
        ('successful', 'Successful'),
        ('declined', 'Declined'),
    ])

    def __str__(self):
        return f"{self.id} - {self.status}"


class Payout(models.Model):
    PAYMENT_METHOD_CHOICES = [
        ('bank_transfer', 'Bank Transfer'),
        ('paypal', 'PayPal'),
        ('credit_card', 'Credit Card'),
    ]

    STATUS_CHOICES = [
        ('paid', 'Paid'),
        ('pending', 'Pending'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f"Payout {self.id} - {self.amount} {self.get_status_display()}"
