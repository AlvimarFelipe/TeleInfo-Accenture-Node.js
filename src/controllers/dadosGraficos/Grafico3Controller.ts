import { Request, Response } from 'express';
import sequelize, { Op } from 'sequelize';
  
export const data = async (req: Request, res: Response)=>{

    res.json({ 
        gradico3_xValues1: ['manhã','tarde','noite'],
        grafico3_yValues1: [20,25,55],
    });


};
