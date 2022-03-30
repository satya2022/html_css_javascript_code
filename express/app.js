// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 8000;

// // For serving static files
// app.use('/static', express.static('static'))

// // Set the template engine as pug
// app.set('view engine', 'pug')

// // Set the views directory
// app.set('views', path.join(__dirname, 'views'))

// // Our pug demo endpoint
// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: 'Hey satya', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/", (req, res) => {
//     res.status(200).send("This is homepage of my first express app with satya");
// });

// app.get("/about", (req, res) => {
//     res.send("This is about page of my first express app with satya");
// });

// app.post("/about", (req, res) => {
//     res.send("This is a post request about page of my first express app with satya");
// });
// app.get("/this", (req, res) => {
//     res.status(404).send("This page is not found on my website cwh");
// });

// app.listen(port, () => {
//     console.log(`The application started successfully on port ${port}`);
// });


const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//EXPRESS  SPECIFIC STUFF
app.use('/static', express.static('static'));// For serving static files


//EXPRESS  SPECIFIC STUFF
app.set('view engine', 'pug');// Set the template engine as pug

app.set('views', path.join(__dirname, 'views'));// Set the views directory

//END POINT
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});




