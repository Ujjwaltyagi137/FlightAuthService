const bodyParser = require('body-parser');
const express = require('express');
const{ PORT } = require('./config/serverconfig.js');

const  setupAndStartserver = async ()=>{
    const app = express();

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
}

 setupAndStartserver();