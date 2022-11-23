import { Request, Response } from 'express';
import sequelize, { Op } from 'sequelize';
  
export const data = async (req: Request, res: Response)=>{

    res.json({ 
        grafico2_xValues1: ["6h","8h","10h","12h","14h","16h","18h","20h","22h","0h"], 
        grafico2_yValues1: [5,6,7,7,6,6,8,9,10,10],
        grafico2_yValues2: [3,6.5,7,9,8,6,6,5,4,4],
        grafico2_yValues3: [2,3,3,5,5,6,6,5,3,3],
    });


};
