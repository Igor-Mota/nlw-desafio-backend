import mysql  from "mysql";
import dotenv from "dotenv";
dotenv.config()


    const Port = <any>process.env.DB_PORT
    const connection = mysql.createConnection({
      
        host : process.env.DB_HOST,
        port: parseInt(Port),
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        timeout: 60000
    });
    export default connection