const express = require("express");
const { join } = require("path");
const app = express();
const PORT = 5000;

// Mounting Static files through middleware
app.use(express.static(join(__dirname, "public")));
app.use("/css", express.static(__dirname + "../public/css"))
app.use("/css", express.static(__dirname + "../public/img"))
app.use("/css", express.static(__dirname + "../public/js"))

app.set('views', "./views")

app.get('/', (req, res) => {
    // res.send("Hello World!");
    // res.sendFile("./views/index.html")
});

app.listen(PORT, ()=> {
    console.log(__dirname)
    console.log(`Server is running on port ${PORT}`)
});