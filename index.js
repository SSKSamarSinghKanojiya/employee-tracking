const express = require('express');
const punycode = require("punycode/");

require('dotenv').config();
require("./config/modelConfig")
const logger = require('./utils/logger');
let commonRouter = require('./routes/mainRoutes')
let app = express()
const PORT = process.env.PORT || 9000 ;
const HOST = "localhost"
app.use(express.json())


app.use('/',commonRouter)


app.listen(process.env.PORT, ()=>{
    console.log("server listening on port ");
    logger.info(`server started and running on http://${HOST}:${PORT}`);

})


/*

echo "# employee-tracking" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SSKSamarSinghKanojiya/employee-tracking.git
git push -u origin main

*/