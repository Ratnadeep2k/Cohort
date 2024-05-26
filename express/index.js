//rest API ,http   
const express = require("express");
const app = express();

var users =[
  {
    name :" John",
    kidneys:[{
      healthy :false
    }]
  }
];
app.get("/",(req,res)=>{
   const jhonKidneys = users[0].kidneys;
   const numberofKidneys = jhonKidneys.length;
   const healthyKidneys = 0;
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

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});