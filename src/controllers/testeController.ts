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
  
    var  ano = '2018-11'
    var t ="t.Tempo_medio <= 2400";
    const records2 = await sequelizes.query('select  count(a.idAtendimento), a.data, SUBSTRING(a.data, 6,2) AS mes ,a.Hora_inicio from atendimento a inner join trabalho t on  t.id = a.trabalho_ID  where  ('+`${t}`+' && a.data like '+`"${ano}%"`+')  &&  (a.Hora_inicio >= "00:00:01" && a.Hora_inicio < "06:00:00") group by mes order by a.Hora_inicio;', {
        type: QueryTypes.SELECT
      });
    res.render('pages/testeConteudo', {
        records2
    });
};




