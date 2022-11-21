import { Request, Response } from 'express';
import sequelize, { Op } from 'sequelize';
import { Atendimento } from '../models/atendimento';


var mes1: String = '11'
var ano1: String = '2018'
export let myAdd = function (mes: String, ano: String) {
    mes1= mes;
    ano1=ano;
       

};


  
export const data = async (req: Request, res: Response)=>{

    
        var filtro = ano1+'-'+mes1
     
        let funcionarios = await Atendimento.findAll({
        attributes:['Data','idAtendimento', [sequelize.fn('count', sequelize.col('idAtendimento')), 'total']],
        raw: true,
        where:{
            Data:{
                [Op.like]: `%${filtro}%`
            }
        },
        group:['Data']
    });


    res.json({ 
        funcionarios,
        data_graf: [ano1,mes1],
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
