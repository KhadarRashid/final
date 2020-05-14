<template>
  <div>
    <div class="jumbotron">
      <h1>Hysuther Photography </h1>
    </div>

    <body class="m-4" id="gradient-font">
      <form>
          <h1>Portfolio</h1>

      <div class="glide">
          <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                  <!-- All the images to be used. Courtesy of me -->
                  <li class="glide__slide"><img src="@/assets/swaying.png" height="400" width="400"></li>
                  <li class="glide__slide"><img src="@/assets/rain_glass.png" height="400" width="400"></li>
                  <li class="glide__slide"><img src="@/assets/leaf_glass.png" height="400" width="400"></li>
                  <li class="glide__slide"><img src="@/assets/leaf_water.png" height="400" width="400"></li>
                  <li class="glide__slide"><img src="@/assets/yellow_couple.png" height="400" width="400"></li>
                  <li class="glide__slide"><img src="@/assets/rainy_umbrella.png" height="400" width="400"></li>
                  <li class="glide__slide"><img src="@/assets/snowy_road.png" height="400" width="400"></li>    
              </ul>
          </div>

          <div class="glide__bullets" data-glide-el="controls[nav]">
              <button class="glide__bullet" data-glide-dir="=0"></button>
              <button class="glide__bullet" data-glide-dir="=1"></button>
              <button class="glide__bullet" data-glide-dir="=2"></button>
              <button class="glide__bullet" data-glide-dir="=3"></button>
              <button class="glide__bullet" data-glide-dir="=4"></button>
              <button class="glide__bullet" data-glide-dir="=5"></button>
              <button class="glide__bullet" data-glide-dir="=6"></button>
          </div>
      </div>

      <h2>Biography </h2>
      <p>
          Hey, if you landed on this website then i assume you need some photos taken. My name is Hysuther and <br>
          I am an aspring Photographer. If you like what you see from the preview then you can book me below. Just <br>
          fill out all the necessary information. Prices will always be negotiated later. I operate in the twin cities.<br>
          <br>
          I hope to hear from you soon!
      </p>

          <div class="row">
              <div class="col-md-3">
                  <h2>To book me:</h2>
              </div>
          </div>
          <!-- Inputs all go here -->
          <div class="col-md-8">
            <label for="name">Please enter your name : </label>
            <input id="name" name="name" class="form-control" type="text" v-model.trim="name">
            
            <label for="email">Enter your email: * </label>
            <input id="email" class="form-control" name="email" type="email" v-model.trim="email" >
          </div>

          <br>

          <div>
              <label for="number">Enter your phone number please:  </label>
              <input id="number" class="form-control" name="number" type="number" v-model.trim="number" >      
          </div>
          <div>
              <label class="form-check-label" >What kind of photshoot would you like?</label>
          <select id="typeShoot" v-model="typeShoot">
              <option disabled selected value=""> Select a shoot </option>
              <option>Full body Shoot</option>
              <option>Headshots/Portraits</option>
              <option>Product Photography</option>
              <option>Outdoor Shoot</option>
          </select>
          <br>
          </div>
        
          <div>
              <label for="dateShoot">When would you like to schedule a shoot? </label>
              <input id="dateShoot" class="form-check-label" name="dateShoot" type="date" v-model="dateShoot" >
          </div>

          <div>
              <label for="notes">Any Special Instructions I should know of?</label>
              <textarea id="notes" class="form-check" rows="7" cols="70" v-model.trim="notes"></textarea>

          <br> 
          <button class="btn btn-primary mt-2" id="submit" type="button" v-on:click="clientFormSubmit">Submit</button>

          </div>
      </form>
    </body>
  </div>
</template>

<script>
  import Glide from '@glidejs/glide'
  
  export default {
    name: "HelloWorld", 
    data() {
      return {
        name: "",
        email: "",
        number: "",
        typeShoot: "",
        dateShoot: "",
        notes: ""
        
      }
    },
    mounted () {
      window.addEventListener("onload", function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; 
      var yyyy = today.getFullYear();

      if(dd<10){
        dd='0'+dd
      } 
      if(mm<10){
        mm='0'+mm
      } 

      today = yyyy+'-'+mm+'-'+dd;
    })
  

    new Glide('.glide', {autoplay: 2000, type: 'carousel', perView: 3 } ).mount()
    },
    methods: {

      clientFormSubmit() {
        let clientData = {

        name: this.name,
        email: this.email,
        number: this.number,
        typeShoot: this.typeShoot,
        dateShoot: this.dateShoot,
        notes: this.notes
        }

        let errors = []
        // If statements to handle validation. No need to over complicate stuff
        if (!this.name){
            errors.push("I gotta know your name!")
        }
        if (!this.email){
            errors.push("I need your email to contact you")
        }
        if (!this.number){
            errors.push("I need your phone number to call you")
        }
        if (!this.typeShoot){
            errors.push("What type of shoot shall we have?")
        }
        if (!this.dateShoot) {
            errors.push("Please select a date")
        }
        if (errors.length == 0) {
            alert("Your booking has been taken")
            this.$emit("newClientAdded", clientData) // assures the guest that their info has been gathered when it hasn't really been, yet.....
        }
        // All the errors go into the error message
        else {
            let errorMsg = errors.join("\n")
            alert(errorMsg)
            return
        }
        location.reload() // reloads the page
    }
  }

        // Setting them all as values
}

</script>