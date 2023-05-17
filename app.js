const express = require('express');

const app = express();

// Template Engine
app.set("view engine", "ejs");

// MiddleWares
app.use(express.static("public"));


// ROUTES 

app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name: "index"
  });
});

app.get('/about', (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
      });
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`App Started on Port : ${port}`);
});
