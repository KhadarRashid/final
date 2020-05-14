import Vue from 'vue'
import App from './App.vue'


import Glide from "vue-glide-js"

import ClientAPIService from "@/services/ClientService"

Vue.config.productionTip = false

// setting up $client_api to be used on the rest of the project
Vue.prototype.$client_api = ClientAPIService

// usinging the imported glide.js
Vue.use(Glide)

import "vue-glide-js/dist/vue-glide.css"


new Vue({
  render: h => h(App),
}).$mount('#app')
