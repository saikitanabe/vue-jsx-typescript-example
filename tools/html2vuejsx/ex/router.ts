import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const LoadComponentDynamicallyExample = () => import(
  '../components/LoadComponentDynamicallyExample'
)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/load-component-dynamically',
      component: LoadComponentDynamicallyExample
    },
    {
      path: '/',
      name: 'root'
    }
  ]
})
