import Vue from 'vue'
import Router from 'vue-router'
import waiting from '@/components/waiting-component'
import receive from '@/components/receiveAt-component'
import main from '@/components/modulemain-component'
import transaction from '@/components/moduleTransact-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transaction',
      component: transaction
    },
    {
      path: '/modulemain',
      name: 'main',
      component: main
    },
    {
      path: '/waiting',
      name: 'waiting',
      component: waiting
    },
    {
      path: '/receiveAt',
      name: 'receive',
      component: receive
    }
  ],
  mode: 'history'
})
