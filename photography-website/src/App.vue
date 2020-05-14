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
    newClientAdded(client) {
      this.$client_api.addClient(client).then( (client) => {
        
      }).catch( err => {
        let message = err.response.data.join(",")
        alert("Error adding student, ", message)
      })
    }
  }
}
</script>