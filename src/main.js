import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import router from "./router"
import Dialog from 'vue-dialog-loading'
import './plugins/bootstrap-vue'




import App from './App.vue'

window.axios = require('axios'); 

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
  
})
.$mount('#app')


Vue.use(Dialog, {
  dialogBtnColor: '#0f0'
})
