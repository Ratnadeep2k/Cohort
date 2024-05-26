//rest API ,http   
const express = require("express");
const app = express();

const users =[
  {
    name :" John",
    kidneys:[{
      healthy :false
    }]
  }
];
app.use(express.json());
//query parameters
app.get("/",(req,res)=>{
   const jhonKidneys = users[0].kidneys;
   const numberofKidneys = jhonKidneys.length;
   let healthyKidneys = 0;
   for( let i=0;i<jhonKidneys.length;i++){
      if(jhonKidneys[i].healthy){
        healthyKidneys++;
      }
    
   }
   const numberofUnhealthyKidneys  = numberofKidneys - healthyKidneys;
   res.json({
      numberofKidneys,
      healthyKidneys,
      numberofUnhealthyKidneys
   })
})

//send data body
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
      healthy:isHealthy
    })
    res.json({
      message:"Kidney added"
    })
})

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});