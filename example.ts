import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Config from './Config'

// set webpack public path: the location where to load [id][hash].bundle.js files
__webpack_public_path__ = Config.publicPath()

const app = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})

export { app, router, store }
