import { Request, Response } from 'express';


export const mudancas =(req: Request, res: Response)=>{

    let id: string =req.params.id

    res.redirect('/teste')
    console.log(id)
}
