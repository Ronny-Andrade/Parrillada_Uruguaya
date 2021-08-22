import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListAdmin from '@/components/Usuario/ListAdmin'
import ListCliente from '@/components/Usuario/ListCliente'
import ListProduct from '@/components/Producto/ListProduct'
import EditAdmin from '@/components/Usuario/EditAdmin'
import DeleteAdmin from '@/components/Usuario/DeleteAdmin'
import NewAdmin from '@/components/Usuario/NewAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/administradores',
      name: 'ListAdmin',
      component: ListAdmin
    },
    {
      path: '/clientes',
      name: 'ListCliente',
      component: ListCliente
    },
    {
      path: '/administradores/new',
      name: 'NewAdmin',
      component: NewAdmin
    },
    {
      path: '/administradores/:adminId/edit',
      name: 'EditAdmin',
      component: EditAdmin
    },
    {
      path: '/administradores/:adminId/delete',
      name: 'DeleteAdmin',
      component: DeleteAdmin
    },
    {
      path: '/productos',
      name: 'ListProduct',
      component: ListProduct
    },
   
  ],
  mode: 'history'
})
