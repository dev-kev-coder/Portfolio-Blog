const express = require("express");
const { join } = require("path");
const app = express();
const PORT = 5000;

// Mounting Static files through middleware
app.use(express.static(join(__dirname, "public")));
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/img", express.static(__dirname + "/public/img"))
app.use("/js", express.static(__dirname + "/public/js"))

// Set templating engine
app.set('views', join(__dirname, '/views'))
app.set('view engine', 'ejs')

// navigation
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});