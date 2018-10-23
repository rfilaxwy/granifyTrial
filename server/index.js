const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    controller = require(__dirname+'/controller.js'),
    cors = require('cors'),
    app = express();

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());

let db
const port = process.env.SERVER_PORT;
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);

    app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
    });
}).catch(err=>{
    console.log('Error connecting to database', err.message)
})


/////////////////////////Endpoints//////////////////////////
//Get a records to view
app.get('/api/records',controller.read);

//Add a new record 
app.put('/api/records',controller.post);

//Delete a specific record
app.delete('/api/records',controller.delete);