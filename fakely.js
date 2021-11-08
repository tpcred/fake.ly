const express = require('express');
const router = require('./routes');

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(router);



app.get("/", (req, res) => {
    res.render("index")
})
app.listen(8080, () => console.log('server listening on port 8080'));