const express = require('express');
const fs = require('fs');
const hbs = require("hbs");
var port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizeText', (text)=> {
    return text.toUpperCase();
})
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))
// app.use((req, res, next)=> {
//     let now = new Date().toString();
//     let log = `${now}: ${req.method} ${req.url}`;

//     console.log(log)
//     fs.appendFile('server.log', log + '\n', (err)=> {
//         if(err){
//             console.log(err); 
//         }
//     })
//     next();
// })
app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageName: 'Home Page',
        welcomeMessage: 'Welcome to the Club'
    });
})

app.get('/about', (req,res) => {
    res.render('about.hbs', {
        pageName: 'About Page',
    });
})
app.get('/projects', (req,res) => {
    res.render('projects.hbs', {
        pageName: 'Projects Page',
    });
})


app.listen(port, ()=> {
    console.log(`Server is up and listening on port: ${port}`)
});