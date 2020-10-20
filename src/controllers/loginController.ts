import {Request,Response} from "express"
import bcrypt from "bcrypt";
import md5 from "md5";

import connection from "../database/connectiondb";

export default {
    index(request:Request,response:Response){
        const {user, password} = request.body;
        
        const cripto = md5(password);
        try{
        connection.query(`SELECT * FROM users WHERE user_name="${user}"`, (err, result) =>{
      
            if(err){ 
                return console.log("erro massa" +  err)
            }
            if(!result){
                return response.json({message:"usuario não encotrado"})
            }
            if(result.length > 0){
               
                if(result[0].user_password !== cripto){
                    return response.json({message:"usuario e senha incorretos"})
                }
            }
                response.json(result)
        })}catch(e){
            console.log("errinho"+e)
        }
        

    }
}
