<template>

  <div id="app">
    <head>      
      <!-- Glide.js -->

     <link src="https://unpkg.com/@glidejs/glide@3.2.3/dist/glide.min.js">
      </head>
    <HelloWorld v-on:newClientAdded="newClientAdded" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    // method ro add the clients using the $client_api and a catch block to catch any errors
    newClientAdded(client) {
      this.$client_api.addClient(client).then( (client) => {
        
      }).catch( err => {
        let message = err.response.data.join(",")
        alert("Error adding client, ", message)
      })
    }
  }
}
</script>