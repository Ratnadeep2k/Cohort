
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
     async function insertData(username:string,email:string,password :string){
      await client.connect();
      try{
        const insertQuery ="INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
        const values =[username ,email,password];
        const result = await client.query(insertQuery,values);
        console.log("Insertion Sucess",result);
      }
      catch(err){
        console.log("Error",err);
      }
      finally{
        await client.end();
      }
     }
insertData("test","test@gmail.com","test123");





//  createUserTable();