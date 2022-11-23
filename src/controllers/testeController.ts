import { Request, Response } from 'express';
import * as sequelize from 'sequelize';

import { Atendimento } from '../models/atendimento';
const { QueryTypes } = require('sequelize');
import { sequelizes } from '../instances/mysql';




/*

 let consulta1g1 = await Atendimento.findAll({
            attributes:['Data','idAtendimento', [sequelize.fn('count', sequelize.col('idAtendimento')), 'total']],
            raw: true,
            where:{
                Data:{
                    [Op.like]: `%${ ano1+'-'+mes1}%`
                }
            },
            group:['Data']
        });

        'select  data ,count(idAtendimento) AS total ,idAtendimento  FROM atendimento where data like ' +`%${ ano1+'-'+mes1}%`+ 'group by data order by data;'
*/


export const conteudo = async (req: Request, res: Response)=>{
  
    var  ano = '2018'

    const records2 = await sequelizes.query('SELECT  count(a.idAtendimento) AS id , a.data FROM atendimento a INNER JOIN trabalho t ON  t.id = a.trabalho_ID where t.Tempo_medio <= 2400  && a.data LIKE '+`"${ano}%"`+' group by a.data order by a.data;', {
        type: QueryTypes.SELECT
      });
    res.render('pages/testeConteudo', {
        records2
    });
};




