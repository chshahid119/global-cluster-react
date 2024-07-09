# myapp/urls.py

from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView, SupportTicketListCreate, \
    SupportTicketRetrieveUpdateDestroy, WalletRetrieveUpdateDestroy, WalletListCreate, PayoutListCreate, \
    PayoutRetrieveUpdateDestroy
from .views import ProfileListCreateView, ProfileRetrieveUpdateDestroyView

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
    path('profile/', ProfileListCreateView.as_view(), name='profile-list-create'),
    path('profile/<int:pk>/', ProfileRetrieveUpdateDestroyView.as_view(), name='profile-detail'),
    path('support-tickets/', SupportTicketListCreate.as_view(), name='support-ticket-list-create'),
    path('support-tickets/<uuid:pk>/', SupportTicketRetrieveUpdateDestroy.as_view(), name='support-ticket-detail'),
    path('wallets/', WalletListCreate.as_view(), name='wallet-list-create'),
    path('wallets/<uuid:pk>/', WalletRetrieveUpdateDestroy.as_view(), name='wallet-detail'),
    path('payouts/', PayoutListCreate.as_view(), name='payout-list-create'),
    path('payouts/<uuid:pk>/', PayoutRetrieveUpdateDestroy.as_view(), name='payout-retrieve-update-destroy'),
]
