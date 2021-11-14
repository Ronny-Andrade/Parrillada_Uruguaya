from .views import RegisterTypeView, RegisterView,LoginView, TypeList, UserList,UserView,LogoutView, Userdelete, Userid, Userupdate
from django.urls import path

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('list', UserList.as_view()),
    path('tipo', RegisterTypeView.as_view()),
    path('list-type', TypeList.as_view()),
    path('user-detail/<str:pk>/', Userid.as_view()),
    path('user-update/<str:pk>/', Userupdate.as_view()),
    path('user-delete/<str:pk>/', Userdelete.as_view())    
    
    
]