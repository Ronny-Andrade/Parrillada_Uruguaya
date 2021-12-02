from rest_framework import serializers
from .models import User, Rolusuario

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= ['id','idrolusuario','ide_card', 'cell_phone','name', 'email', 'password', 'fechanac','status']
        

    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class RolUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rolusuario
        fields = '__all__'