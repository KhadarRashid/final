let express = require("express")
let bodyParser = require("body-parser")
let api_routes = require("./routes/api.js")

// getting the oath so that the code on line 11 can pass
let path = require("path")


let app = express()

app.use(express.static(path.join(__dirname, "photography-website", "dist" )))


app.use(bodyParser.json())

app.use("/api", api_routes)

// heroku decides which port to run on and other wise port 3000
let server = app.listen(process.env.PORT || 3000, function(){
    console.log("Express server running on port", server.address().port)
})