import { Request, Response } from 'express';


export const data = async (req: Request, res: Response)=>{
    res.json({
        grafico1_xValues1: ["05/9", "06/9", "07/9", "08/9", "09/9","10/9","11/9","12/9"], 
        grafico1_yValues1: [25, 35, 20, 15, 18, 14, 35, 40],
        grafico1_yValues2: [18, 10, 10, 18, 14, 17, 20, 7],

        grafico2_xValues1: ["6h","8h","10h","12h","14h","16h","18h","20h","22h","0h"], 
        grafico2_yValues1: [5,6,7,7,6,6,8,9,10,10],
        grafico2_yValues2: [3,6.5,7,9,8,6,6,5,4,4],
        grafico2_yValues3: [2,3,3,5,5,6,6,5,3,3],

        gradico3_xValues1: ['manhã','tarde','noite'],
        grafico3_yValues1: [20,25,55],

        grafico4_xValues1: ["Jose","Ana","Matheus","Davi","Rodrigo","Anthony","Lucas","Daniela","Sandra","Jessica"],
        grafico4_yValues1: [2,2,3,3,2,3,4,3,1,5],
        grafico4_yValues2: [3,4,4,5,3,4,6,4,3,6],
        grafico4_yValues3: [5,4,4,7,3,6,7,4,4,8]
    });


};