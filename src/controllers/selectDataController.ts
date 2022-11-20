import express, { Request, Response } from 'express';

// For POST-Support
const multer = require('multer');
const upload = multer();


var id = null;
export const app = ( upload.array(), (req: Request, res: Response) => {

 
    id = req.body.id;
    res.send('Result : '+ id);
 
});
