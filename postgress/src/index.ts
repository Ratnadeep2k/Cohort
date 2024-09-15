
//write a function to create a user table in your database  

 import { Client } from "pg";
 const client =new Client({
   connectionString :"postgresql://postgres:ratnadeep@localhost:5432/postgres?sslmode=disable"
 })

//  async function createUserTable(){
//     await client.connect()
//     const result = await client.query(`
//             CREATE TABLE users (
//                 id SERIAL PRIMARY KEY,
//                 username VARCHAR(50) UNIQUE NOT NULL,
//                 email VARCHAR(50) UNIQUE NOT NULL,
//                 password VARCHAR(50) NOT NULL,
//                 created_at TIMESTAMP DEFAULT NOW()
//             );
//      `)
//      console.log(result);
//  }


//Insert into database
//      async function insertData(username:string,email:string,password :string){
//       await client.connect();
//       try{
//         const insertQuery ="INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
//         const values =[username ,email,password];
//         const result = await client.query(insertQuery,values);
//         console.log("Insertion Sucess",result);
//       }
//       catch(err){
//         console.log("Error",err);
//       }
//       finally{
//         await client.end();
//       }
//      }
// insertData("test","test@gmail.com","test123");
//  createUserTable();


//Fetch email from db 


async function getUser(email:string){
  await client.connect();
  const query  ='SELECT * FROM users WHERE email =$1';
  const result = await client.query(query,[email]);

  if(result.rows.length>0){
    console.log(result.rows[0]);
    return result.rows[0]; 
  }
  else {
    console.log("No user found");
    return null;
  }
} 
getUser("username@gmail.com");