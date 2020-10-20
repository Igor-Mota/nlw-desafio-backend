import {Request, Response} from "express"
import connection from "../database/connectiondb";
import orphanagesView from "../views/orphanagesview"
    export default{
        index(request:Request, response:Response){
         
            connection.query('SELECT * FROM `orphanages`', function(error, result, fields){
              if(error){
                  console.log(error)
              }
                response.status(200).json(orphanagesView.renderMany(result))
          })
        },
        show(request:Request, response:Response){
            const {id} = request.params;
            try{
            connection.query(`SELECT * FROM orphanages JOIN images ON orphanages.id = images.myorphanage WHERE id=${id}`,
            (err,result,fields) =>{
                if(err){
                    console.log(err)
                }
                let OrphanageImages = <any>[];
           
                if(result.length  === 0){
                  return  response.json({message:"Nenhum resultado encontrado"})
                }
                result.map((resultado:{URL:string}, index:number) =>{
                    OrphanageImages.push(resultado.URL)
                })
               const Orphanage:any = {result:result[0], OrphanageImages}
                
                return response.json(orphanagesView.render(Orphanage));
            })
            }catch(e){
                console.log(e)
            }
        },
        create(request:Request, response:Response){
            const {
                name,
                latitude,
                longitude,
                about,
                instructions,
                opening_hours,
                open_on_weekends,
            } = request.body;

            const requestImages = request.files as Express.Multer.File[];
            let images = requestImages.map( image =>{
                return {path: image.filename}
            })
            try{
            connection.query(`INSERT INTO orphanages
                            (name,about,instructions,opening_hours,open_on_weekends,latitude,longitude)
                             VALUES
                             ("${name}","${about}","${instructions}",
                             "${opening_hours}","${open_on_weekends}",
                             "${latitude}","${longitude}")`, function (err,result,fields) {       
                                if(err){
                                    console.log("erro massa  "+err)
                                }
                                    images.map(image =>{
                                connection.query(`INSERT INTO images
                                (url,myorphanage)
                                VALUES("${image.path}","${result.insertId}")`)
                            })
                            response.json(result)
                                });           
                            }catch(err){
                                console.log(err)
                            }
                        }
                    }
