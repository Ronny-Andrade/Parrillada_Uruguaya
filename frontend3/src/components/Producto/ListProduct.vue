<template lang="html">

<div class= "container">
	<div class = "row">
		<div class= "col text-left">
			
				<h2>Productos principales</h2>
                                              
                
                <div>
                    <b-card v-for="producto in productos"
                        :title= "producto.nombre"
                        :img-src="producto.imagen"
                        img-alt="Image"
                        img-top
                        tag="article"
                        
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        {{producto.descripcion}}
                        </b-card-text>

                        <b-button href="#" variant="primary">Editar</b-button>
                        <b-button href="#" variant="danger">Eliminar</b-button>
                        
                        <b-card-footer>$ {{producto.precio}}</b-card-footer>
                    </b-card>
                </div>

		</div>
	</div>
</div>
</template>

<script>

import axios from 'axios'

export default {
data(){
    return {
        productos: []
    }
},
methods: {
    cargarDatos(){
        axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/pro/productos/'
    }).then(res => {
        this.productos = res.data

    })
    .catch((error) => {
        console.log("Error",error)
        })
    }
},
created(){
    this.cargarDatos()
    
}
}
</script>

<style lang="css" scoped>

</style>