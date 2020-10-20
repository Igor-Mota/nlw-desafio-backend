"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectiondb_1 = __importDefault(require("../database/connectiondb"));
const orphanagesview_1 = __importDefault(require("../views/orphanagesview"));
exports.default = {
    index(request, response) {
        connectiondb_1.default.query('SELECT * FROM `orphanages`', function (error, result, fields) {
            if (error) {
                console.log(error);
            }
            response.status(200).json(orphanagesview_1.default.renderMany(result));
        });
    },
    show(request, response) {
        const { id } = request.params;
        try {
            connectiondb_1.default.query(`SELECT * FROM orphanages JOIN images ON orphanages.id = images.myorphanage WHERE id=${id}`, (err, result, fields) => {
                if (err) {
                    console.log(err);
                }
                let OrphanageImages = [];
                if (result.length === 0) {
                    return response.json({ message: "Nenhum resultado encontrado" });
                }
                result.map((resultado, index) => {
                    OrphanageImages.push(resultado.URL);
                });
                const Orphanage = { result: result[0], OrphanageImages };
                return response.json(orphanagesview_1.default.render(Orphanage));
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    create(request, response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, } = request.body;
        const requestImages = request.files;
        let images = requestImages.map(image => {
            return { path: image.filename };
        });
        try {
            connectiondb_1.default.query(`INSERT INTO orphanages
                            (name,about,instructions,opening_hours,open_on_weekends,latitude,longitude)
                             VALUES
                             ("${name}","${about}","${instructions}",
                             "${opening_hours}","${open_on_weekends}",
                             "${latitude}","${longitude}")`, function (err, result, fields) {
                if (err) {
                    console.log("erro massa  " + err);
                }
                images.map(image => {
                    connectiondb_1.default.query(`INSERT INTO images
                                (url,myorphanage)
                                VALUES("${image.path}","${result.insertId}")`);
                });
                response.json(result);
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
