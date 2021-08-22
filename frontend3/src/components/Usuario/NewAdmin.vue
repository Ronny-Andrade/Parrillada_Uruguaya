<template lang="html">
<div class="container">
    <div class="row">
        <div class="col text-left">
            <h2>Nuevo Administrador</h2>
        </div>        
    </div>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <form @submit="onSubmit">
                    <div class="form-group row">
                        <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-6">
                            <input type="text" placeholder="Nombre" name="nombre" class="form-control" v-model.trim="form.nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="cedula" class="col-sm-2 col-form-label">Cédula</label>
                        <div class="col-sm-6">
                            <input type="text" placeholder="Ingrese su cédula de indentidad" name="cedula" class="form-control" v-model.trim="form.cedula">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="correo" class="col-sm-2 col-form-label">Correo</label>
                        <div class="col-sm-6">
                            <input type="text" placeholder="example@hotmail.com" name="correo" class="form-control" v-model.trim="form.correo">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="telefono" class="col-sm-2 col-form-label">Teléfono</label>
                        <div class="col-sm-6">
                            <input type="text" placeholder="Teléfono" name="nombre" class="form-control" v-model.trim="form.telefono">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="Pass-field" class="col-sm-2 col-form-label">Contraseña</label>
                        <div class="col-sm-6">
                            <input type="text" placeholder="Contraseña" name="pass_field" class="form-control" v-model.trim="form.pass_field">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="fechanac" class="col-sm-2 col-form-label">Fecha nacimiento</label>
                        <div class="col-sm-6">
                            <input type="date" placeholder="dd/mm/aaaa" name="fechanac" class="form-control" v-model.trim="form.fechanac">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fecharegistro" class="col-sm-2 col-form-label">Fecha de registro</label>
                        <div class="col-sm-6">
                            <input type="date" placeholder="dd/mm/aaaa" name="fecharegistro" class="form-control" v-model.trim="form.fecharegistro">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="estado" class="col-sm-2 col-form-label">Estado</label>
                        <div class="col-sm-6">
                            <input type="text" placeholder="Estado" name="estado" class="form-control" v-model.trim="form.estado">

                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="rol" class="col-sm-2 col-form-label">Rol</label>
                        <div class="col-sm-6">
                            <select class="form-control" name="idrolusuario" v-model.trim="form.idrolusuario">
                                <option value="1">Administador</option>
                                
                            </select>
                        </div>
                    </div>

                    <div class="rows">
                        <div class="col text-center">
                            <b-button type="submit" variant="primary">Crear</b-button>
                            <b-button type="submit" class="btn-large-space" :to="{ name: 'ListAdmin'}">Cancelar</b-button> 
                        </div>
                    </div>
                    </form>    
                </div>
            </div>
        </div>        
    </div>

</div>
</template>

<script>

import axios from 'axios'

export default {
	data()  {
        return {
            
            form: {
                nombre: '',
                cedula: '',
                correo: '',
                telefono: '',
                pass_field: '',
                fechanac: '',
                fecharegistro: '',
                estado: '',
                idrolusuario: ''
                


            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path =  `http://localhost:8000/usr/usuarios/`

            axios.post(path, this.form).then((response) => {
                this.form.nombre = response.data.nombre
                this.form.cedula = response.data.cedula
                this.form.correo = response.data.correo
                this.form.telefono = response.data.telefono
                this.form.pass_field = response.data.pass_field
                this.form.fechanac = response.data.fechanac
                this.form.fecharegistro = response.data.fecharegistro
                this.form.estado = response.data.estado
                this.form.idrolusuario = response.data.idrolusuario

                alert("Información actualizada exitosamente")
                        
            })
            .catch((error) => {
                console.log(error)
            })
        },

    },
    created(){
        
    }
}
</script>

<style lang="css" scoped>
</style>