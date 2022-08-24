const express = require("express");
const cors = require("cors");

const db = require("./db/database");
const app = express();
const port = process.env.port || 3000;
const path = require('path');


    (async () => {
        try{
            await db.authenticate();
            await db.sync();
            console.log("connected");
        }catch(error){
            throw new Error(error);
        }

    })();


 app.use(express.json());
 app.use(cors());




 const rootPath = path.join(__dirname, './images');
app.use('/File', express.static(rootPath));



app.listen(port,() => {
    console.log('server error:', port);
});

