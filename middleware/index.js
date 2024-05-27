
const express = require('express')
const app = express();
const port = 3000;
app.get('/checkup', function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username != 'admin' ||  password !='pass'){
        res.status(401).json({
            status: 'error',
            message: 'Unauthorized'
        })
    }
if(kidneyId !=1 && kidneyId!=2){
    res.status(400).json({
        status: 'error',
        message: 'Invalid kidneyId'
    })
}
res.json({
    status: 'success',
    message: 'You are fine'

    });
})

app.listen(port)