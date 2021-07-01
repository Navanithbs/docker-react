const express = require('express');
const redis = require('redis');
const process = require('process');

const app=express();
const client=redis.createClient({
host: 'redis-server',
//in general host contains an address such as https//:... but as we use docker-compose we direct its server name 
port: 6379
});
client.set('visits',0);

app.get('/',(req,res)=>{
    process.exit(1);//('0' => ok all and exit) except '0' ('1/2/3/....' => exit when something goes wrong) 
    client.get('visits',(err,visits)=>{
        res.send('Number of visitors'+visits);
        client.set('visits',parseInt(visits)+1)
    })
})

app.listen(8002,()=>{
    console.log("Server started on port 8002!!!!!!!!!!!!")
})
