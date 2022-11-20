import express, { Request, Response } from 'express';
const app = express();

// For POST-Support
const multer = require('multer');
const upload = multer();



var id = null;
app.post('/gabs', upload.array(), (req: Request, res: Response) => {

    id = req.body.id;
    res.send('Result : '+ id);
 
});


export default app;