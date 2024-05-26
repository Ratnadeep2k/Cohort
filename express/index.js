//rest API ,http   

const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;
app.use(bodyParser.json());
function sum(a,b){
    let ans =0;
    for(let i =0;i<=navigator;i++){
      ans = ans+i;
    }
    return ans;

}

app.get('/sum',(req,res)=>{
  const n = req.query.n;
  const ans = sum(n);
  res.send(ans);
})
app.post("/route-handler",function(req,res){
    console.log(req.body);
    res.send("Hello World 1");
    // res.json({
    //     message: "Hello World 2",
    //     age : 21 
    
    // })
})
app.post('/backend-api/conversation',(req,res)=>{
  const message = req.body.message
  console.log(message);
  //Mechine learning model 
  res.json({
    output :'2+2 = 4'
  })
})
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});