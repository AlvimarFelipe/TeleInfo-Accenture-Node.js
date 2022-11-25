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