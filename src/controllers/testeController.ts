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
    const total = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where a.data like ' +`"${ano}%"`+ ' group by mes order by quantidade DESC;', {
        type: QueryTypes.SELECT
    });
    const facil = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where t.Tempo_medio <= 2400  && a.data like ' +`"${ano}%"`+ ' group by mes;', {
        type: QueryTypes.SELECT
    });
    const medio = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where (Tempo_medio > 2400  && Tempo_medio <= 12000)  && a.data like ' +`"${ano}%"`+ ' group by mes;', {
        type: QueryTypes.SELECT
    });
    const dificil = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where Tempo_medio > 12000 && a.data like ' +`"${ano}%"`+ ' group by mes;', {
        type: QueryTypes.SELECT
    });
    const dias = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 9,2) AS dias from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where a.data like ' +`"${ano}%"`+ ' group by dias order by quantidade DESC LIMIT 3;', {
        type: QueryTypes.SELECT
    });
    const funcionarios = await sequelizes.query('select  count(a.idAtendimento) AS soma, f.nome ,f.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join funcionario f on f.id = a.funcionario_ID where  a.data like '+`"${ano}%"`+' group by f.id order by soma DESC LIMIT 3;', {
        type: QueryTypes.SELECT
    });
    const clientes = await sequelizes.query('select  count(a.idAtendimento) AS soma, c.nome,c.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join cliente c on c.id = a.cliente_ID where a.data like '+`"${ano}%"`+' group by c.id order by soma DESC LIMIT 3;', {
        type: QueryTypes.SELECT
    });


    res.render('pages/testeConteudo', {
        total,
        facil,
        medio,
        dificil,
        dias,
        funcionarios,
        clientes
    });
};




