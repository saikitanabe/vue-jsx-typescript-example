import Vue from 'vue';
import VueRouter from 'vue-router';

import {Introduction} from '../components/Introduction'
import Config from '../Config'

Vue.use(VueRouter)

const LoadComponentDynamicallyExample = () => import(
  /* webpackChunkName: "LoadComponentDynamicallyExample" */ 
  '../components/LoadComponentDynamicallyExample'
)
const InputExample = () => import(
  /* webpackChunkName: "InputExample" */
  '../components/InputExample'
)
const TypeCheckJSXProperties = () => import(
  /* webpackChunkName: "TypeCheckJSXProperties" */
  '../components/TypeCheckJSXProperties'
)

console.info(`loading from rootPath(${Config.rootPath()}) rootPathName(${Config.rootPathName()})`)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: `${Config.rootPathName()}/input-update`,
      component: InputExample
    },
    {
      path: `${Config.rootPathName()}/load-component-dynamically`,
      component: LoadComponentDynamicallyExample
    },
    {
      path: `${Config.rootPathName()}/type-check-jsx-properties`,
      component: TypeCheckJSXProperties
    },
    {
      path: `${Config.rootPath()}`,
      name: 'root',
      component: Introduction
    }
  ]
})
