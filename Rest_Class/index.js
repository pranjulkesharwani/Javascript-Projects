// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");

// app.use(express.urlencoded({ extended: true }));

// app.set("view engine", "ejs");
// app.set("views", path)

// app.use(express.static(path.join(__dirname, "public")));

// let posts = [
//     {
//         username: "pranjul",
//         content: "I love conding",
//     },
//     {
//         username: "yogi",
//         content: "Hard work is important to achive success",
//     },
//     {
//         username: "yogant",
//         content: "I got selected for my 1st intership",
//     },
// ];

// app.get("/posts", (req, res) => {
//     // res.render("index.ejs");
//     res.render('index');
// });

// // app.get("/posts/new", (req, res) => {
// //     res.render();
// // });

// app.listen(port, () => {
//     console.log("listening to port: 3000");
// });


const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");
// View engine setup
app.set('view engine', 'ejs');

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "pranjul",
        content: "I love conding",
    },
    {
        username: "yogi",
        content: "Hard work is important to achive success",
    },
    {
        username: "yogant",
        content: "I got selected for my 1st intership",
    },
];

// Without middleware
app.get('/posts', function (req, res) {

    // Rendering home.ejs page
    res.render('index.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/posts', (req, res) => {
    console.log(req.body);
    res.send("post request working");
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});