
import express, { Request, Response } from 'express';
import sequelize, { Op, QueryTypes } from 'sequelize';
import { sequelizes } from '../instances/mysql';

// For POST-Support
const multer = require('multer');
const upload = multer();

export const conteudo = async (req: Request, res: Response)=>{
    var mes = req.query.mes
    var ano = req.query.ano


    const Total = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where a.data like ' +`"${ano+'-'+mes}%"`+ ' group by mes order by quantidade DESC;', {
        type: QueryTypes.SELECT
    });
    const Fácil = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where t.Tempo_medio <= 2400  && a.data like ' +`"${ano+'-'+mes}%"`+ ' group by mes;', {
        type: QueryTypes.SELECT
    });
    const Médio = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where (Tempo_medio > 2400  && Tempo_medio <= 12000)  && a.data like ' +`"${ano+'-'+mes}%"`+ ' group by mes;', {
        type: QueryTypes.SELECT
    });
    const Difícil = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 6,2) AS mes from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where Tempo_medio > 12000 && a.data like ' +`"${ano+'-'+mes}%"`+ ' group by mes;', {
        type: QueryTypes.SELECT
    });
    const dias = await sequelizes.query('select  count(a.idAtendimento) As quantidade, SUBSTRING(a.data, 9,2) AS dias from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where a.data like ' +`"${ano+'-'+mes}%"`+ ' group by dias order by quantidade DESC LIMIT 3;', {
        type: QueryTypes.SELECT
    });
    const funcionarios = await sequelizes.query('select  count(a.idAtendimento) AS soma, f.nome ,f.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join funcionario f on f.id = a.funcionario_ID where  a.data like '+`"${ano+'-'+mes}%"`+' group by f.id order by soma DESC LIMIT 3;', {
        type: QueryTypes.SELECT
    });
    const clientes = await sequelizes.query('select  count(a.idAtendimento) AS soma, c.nome,c.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join cliente c on c.id = a.cliente_ID where a.data like '+`"${ano+'-'+mes}%"`+' group by c.id order by soma DESC LIMIT 3;', {
        type: QueryTypes.SELECT
    });
   
    res.json( {
        Total,
        Fácil,
        Médio,
        Difícil,
        dias,
        funcionarios,
        clientes
    });

   
 
};
