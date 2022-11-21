import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Funcionario } from '../models/funcionario';



export const conteudo = async (req: Request, res: Response)=>{
    var nomes= 'AMB'+'%';

    let funcionarios = await Funcionario.findAll({
        attributes:['id','Nome','e-mail'],
       
        where:{
            Nome:{
                [Op.like]:nomes
            }
        },
        order:[
            ['id','DESC']
        ],
        group:['Nome'],
        offset:0,
        limit:5 
       
    });
     
    
    res.render('pages/testeConteudo',{
        funcionarios
    });
};


