
//write a function to create a user table in your database  

 import { Client } from "pg";
 const client =new Client({
   connectionString :"postgresql://Learning_owner:OHBA7u4GtYsI@ep-solitary-cherry-a5wevzxd.us-east-2.aws.neon.tech/Learning?sslmode=require"
 })

 async function createUserTable(){
    await client.connect()
    const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(50) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            );
     `)
     console.log(result);
 }
 createUserTable();