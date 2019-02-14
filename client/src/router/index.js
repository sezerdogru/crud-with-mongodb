import Vue from 'vue'
import Router from 'vue-router'
import Appointments from '@/components/Appointments'
import NewAppointment from '@/components/NewAppointment'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Appointments',
      component: Appointments
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/appointments/new',
      name: 'NewAppointment',
      component: NewAppointment
    },
    {
      path: '/appointments/:id',
      name: 'EditAppointment',
      component: NewAppointment
    },
    {path: '*', redirect: '/'}
  ]
})
