const mysql = require(`mysql`);
const path = require(`path`);
const bP = require(`body-parser`);
const express = require(`express`);
const app = express();
const html = require(`./app/routes/html.js`);
const api = require (`./app/routes/api.js`);
let PORT = process.env.PORT || 3000;



app.use(bP.urlencoded({extended : true}));
app.use(bP.json());

app.use(`/`,html);
app.use(`/api`,api);

app.listen(PORT,function(){
  console.log(`the App is listening on PORT: ${PORT}`);
});

