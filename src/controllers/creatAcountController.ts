import {Request, Response} from "express"
import connection from  "../database/connectiondb"; 
import md5 from "md5";

export default {
    create(request:Request, response:Response){
        const  {email, password, nickName} = request.body;
        const Dbpassword = md5(password);

        connection.query(`INSERT INTO users (user_name, user_password, user_nickName) VALUES ("${email}","${Dbpassword}","${nickName}")`,
        function(err, result){
            if(err){
                console.log("err"+err)
            }
            console.log(result)
            return response.json({result,message:"valeu"})
        });
        connection.end();
    }
}