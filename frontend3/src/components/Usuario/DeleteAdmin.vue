<template lang="html">
<div class="container">
    <div class="row">
        <div class="col">
            <h3>¿Estas seguro que deseas eliminar ha este administrador?</h3>
            <p>Nombre: {{ this.element.nombre}}</p>
            <p>Cédula: {{ this.element.cedula}}</p>
            <p>Correo: {{ this.element.correo}}</p>
            <p>Teléfono: {{ this.element.telefono}}</p>
            
        </div>
    </div>
    <div>
    <div>

        <b-button v-on:click="eliminarUsuario" variant="danger">Eliminar</b-button>

    </div>
</div>
</div>

    
</template>
<script>

import axios from 'axios'

export default {
    data(){
        return {
            adminId: this.$route.params.adminId,
            element: {
                nombre: '',
                correo: '',
                telefono: '',
                cargo: ''
            }
        }
    },
    methods: {
        getUsuario(){
            const path =  `http://localhost:8000/usr/usuarios/${this.adminId}/`

            axios.get(path).then((response) => {
                this.element.nombre = response.data.nombre
                this.element.cedula = response.data.cedula
                this.element.correo = response.data.correo
                this.element.telefono = response.data.telefono
                
                
            })
            .catch((error) => {
                console.log(error)
            })
        },
        eliminarUsuario(){
            const path =  `http://localhost:8000/usr/usuarios/${this.adminId}/`
            axios.delete(path).then((response) =>{
                location.href = '/usuarios'
            })
            .catch((error) =>{
                alert("No es posible eliminar ha este administrador")
            })
        }
    },
    created() {
        this.getUsuario()
    }
}
</script>