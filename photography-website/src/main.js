import Vue from 'vue'
import App from './App.vue'


import Glide from "vue-glide-js"

import ClientAPIService from "@/services/ClientService"

Vue.config.productionTip = false


Vue.prototype.$client_api = ClientAPIService

Vue.use(Glide)

import "vue-glide-js/dist/vue-glide.css"


new Vue({
  render: h => h(App),
}).$mount('#app')
