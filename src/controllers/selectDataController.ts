import express, { Request, Response } from 'express';

// For POST-Support
const multer = require('multer');
const upload = multer();


var id = null;
var g1_mes ='1';
var g1_ano='1';
export const app = ( upload.array(), (req: Request, res: Response) => {

    g1_mes=req.body.g1_mes
    g1_ano=req.body.g1_ano
    id = req.body.id;
    res.send('Result : '+ id);
    
});
