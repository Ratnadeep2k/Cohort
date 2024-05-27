
const express = require('express')
const app = express();
const port = 3000;
let numberOfRequest =0;
function calculateRequest(req,res,next){
    numberOfRequest++;
    next();

}
app.get('/calculate',calculateRequest,function(req,res){
    res.json({
        status: 'success',
        message: 'The number of requests is ' + numberOfRequest
    })

})
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