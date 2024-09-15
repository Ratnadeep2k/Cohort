
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
     async function insertData(){
      await client.connect();
      try{
        const insertQuery ="INSERT INTO users (username,email,password) VALUES ('username2','username@gmail.com','anypassword')";
        const result = await client.query(insertQuery);
        console.log("Insertion Sucess",result);
      }
      catch(err){
        console.log("Error",err);
      }
      finally{
        await client.end();
      }
     }
insertData();





//  createUserTable();