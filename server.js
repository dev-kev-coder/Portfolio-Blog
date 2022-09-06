const express = require("express");
const { join } = require("path");
const app = express();


// Mounting Static files through middleware
app.use(express.static(join(__dirname, "public")));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/public/js"));

// Set templating engine
app.set('views', join(__dirname, '/views'));
app.set('view engine', 'ejs');

// navigation
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/projects', (req, res) => {
    res.render('projects')
});

// checks enviroment variable on where the server is being hosted on...defaults to 5000 is none found
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});