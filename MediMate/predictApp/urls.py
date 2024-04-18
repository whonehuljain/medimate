from django.urls import path
from . import views

urlpatterns = [
    path('', views.predictor),
    # path('submitHandler/',views.submitHandler)
]