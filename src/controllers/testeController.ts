import { Request, Response } from 'express';
import sequelize from 'sequelize';
import { Op } from 'sequelize';
import { Atendimento } from '../models/atendimento';



export const conteudo = async (req: Request, res: Response)=>{
    var nomes= 'AMB'+'%';


    let funcionarios = await Atendimento.findAll({
        attributes:['Data','DataAno','Hora_inicio', [sequelize.fn('count', sequelize.col('idAtendimento')), 'total'],],
        raw: true,
        where:{
            Data:{
                [Op.like]: `%${ 2018+'-'+11}%`
            }
        },
        group:['Data']
    });
    
    res.render('pages/testeConteudo',{
        funcionarios
    });
};


