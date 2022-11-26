import express, { Request, Response } from 'express';
import sequelize, { Op, QueryTypes } from 'sequelize';
import { sequelizes } from '../instances/mysql';

// For POST-Support
const multer = require('multer');
const upload = multer();





export const select1 = async (req: Request, res: Response)=>{

    let ano = req.query.ano;
 
    let selectdata = await sequelizes.query('SELECT SUBSTRING(data, 6,2) AS mes FROM `Atendimento` where data like '+`"${ano}%"`+' group by mes;', {
        type: QueryTypes.SELECT
    });
    

    res.json({ 
        selectdata
    });
  

};

export const select2 = async (req: Request, res: Response)=>{

    let ano = req.query.ano;
    let mes =req.query.mes;

    var data =ano+'-'+mes;
    let nome = await sequelizes.query('select f.nome,f.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID inner join funcionario f on f.id = a.funcionario_ID where a.data like '+`"${data}%"`+' group by f.id order by f.id;', {
        type: QueryTypes.SELECT
    })
   
    
    res.json({ 
        nome
    });
  

};