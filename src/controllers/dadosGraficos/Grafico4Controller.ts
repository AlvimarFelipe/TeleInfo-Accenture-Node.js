import { Request, Response } from 'express';
import sequelize, { Op } from 'sequelize';
  
export const data = async (req: Request, res: Response)=>{

    res.json({ 
        grafico4_xValues1: ["Jose","Ana","Matheus","Davi","Rodrigo","Anthony","Lucas","Daniela","Sandra","Jessica"],
        grafico4_yValues1: [2,2,3,3,2,3,4,3,1,5],
        grafico4_yValues2: [3,4,4,5,3,4,6,4,3,6],
        grafico4_yValues3: [5,4,4,7,3,6,7,4,4,8]
    });


};
