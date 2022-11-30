import { Request, Response } from 'express';
import sequelize, { Op, QueryTypes } from 'sequelize';
import { sequelizes } from '../instances/mysql';


// Dados Graficos um
export const data1 = async (req: Request, res: Response)=>{

  let ano1 = req.query.ano;
  let mes1 = req.query.mes;

  let ano2 = req.query.ano2;
  let mes2 = req.query.mes2;   

  // SUBSTRING(data, 9,2) AS data
  let consulta1g1 = await sequelizes.query('select SUBSTRING(data, 9,2) AS data ,count(idAtendimento) AS total ,idAtendimento  FROM atendimento where data like ' +`"${ ano1+'-'+mes1}%"`+ 'group by data;', {
      type: QueryTypes.SELECT
    });
  
    let consulta2g1 = await sequelizes.query('select SUBSTRING(data, 9,2) AS data ,count(idAtendimento) AS total ,idAtendimento  FROM atendimento where data like ' +`"${ano2+'-'+mes2}%"`+ 'group by data;', {
      type: QueryTypes.SELECT
    });

  res.json({ 
      consulta1g1,
      consulta2g1,
      data_graf1: [ano1,mes1,ano2,mes2],
  });

};

// Dados Graficos dois
export const data2 = async (req: Request, res: Response)=>{

  let ano = req.query.ano;
  let mes = req.query.mes;

  const records1 = await sequelizes.query('SELECT  count(a.idAtendimento) AS id , SUBSTRING(data, 9,2) AS data FROM atendimento a INNER JOIN trabalho t ON  t.id = a.trabalho_ID where t.Tempo_medio <= 2400  && a.data LIKE '+`"${ano+'-'+mes}%"`+' group by a.data order by a.data;', {
      type: QueryTypes.SELECT
    });

  const records2 = await sequelizes.query('SELECT  count(a.idAtendimento) AS id FROM atendimento a INNER JOIN trabalho t ON  t.id = a.trabalho_ID where (Tempo_medio > 2400  && Tempo_medio <= 12000)  &&  a.data LIKE '+`"${ano+'-'+mes}%"`+' group by a.data order by a.data;', {
      type: QueryTypes.SELECT
    });

  const records3 = await sequelizes.query('SELECT  count(a.idAtendimento) AS id FROM atendimento a INNER JOIN trabalho t ON  t.id = a.trabalho_ID where Tempo_medio > 12000 && a.data LIKE '+`"${ano+'-'+mes}%"`+' group by a.data order by a.data;', {
      type: QueryTypes.SELECT
    });

  res.json({
      records1,
      records2,
      records3
  });

};

// Dados Graficos tres
export const data3 = async (req: Request, res: Response)=>{

  let ano = req.query.ano;
  let mes = req.query.mes;
  var datas= ano+'-'+mes;

  var madrugadas=[]
  var manhas=[]
  var tardes=[]
  var noites=[]
  
  var dificuldade=["t.Tempo_medio <= 2400","(Tempo_medio > 2400  && Tempo_medio <= 12000) ","Tempo_medio > 12000"];

 
  for(let i =0;i<dificuldade.length;i++){


    //madrugada
    const madrugada = await sequelizes.query('select  count(a.idAtendimento) AS valor, a.data, SUBSTRING(a.data, 6,2) AS mes ,a.Hora_inicio from atendimento a inner join trabalho t on  t.id = a.trabalho_ID  where  ('+`${dificuldade[i]}`+' && a.data like '+`"${datas}%"`+')  &&  (a.Hora_inicio >= "00:00:01" && a.Hora_inicio < "06:00:00") group by mes order by a.Hora_inicio;', {
      type: QueryTypes.SELECT
    });
  
    if(madrugada.length < 1){
      madrugadas.push([{valor:0}])
    }else{
      madrugadas.push(madrugada)
    }
  
    //manha
    const manha = await sequelizes.query('select  count(a.idAtendimento) AS valor, a.data , SUBSTRING(a.data, 6,2) AS mes,a.Hora_inicio from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where ('+`${dificuldade[i]}`+' && a.data like '+`"${datas}%"`+') && (a.Hora_inicio >= "06:00:00" && a.Hora_inicio < "12:00:00") group by mes order by a.Hora_inicio;', {
        type: QueryTypes.SELECT
      });

      if(manha.length < 1){
        manhas.push([{valor:0}])
      }else{
        manhas.push(manha)
      }
   
    // tarde
    const tarde = await sequelizes.query('select  count(a.idAtendimento) AS valor, a.data , SUBSTRING(a.data, 6,2) AS mes ,a.Hora_inicio from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where ('+`${dificuldade[i]}`+' && a.data like '+`"${datas}%"`+') && (a.Hora_inicio >= "12:00:00" && a.Hora_inicio < "18:00:00") group by mes order by a.Hora_inicio;        ', {
      type: QueryTypes.SELECT
    });

    if(tarde.length < 1){
      tardes.push([{valor:0}])
    }else{
      tardes.push(tarde)
    }
 
    //noite
    const noite = await sequelizes.query('select  count(a.idAtendimento) AS valor, a.data , SUBSTRING(a.data, 6,2) AS mes ,a.Hora_inicio from atendimento a inner join trabalho t on  t.id = a.trabalho_ID where ('+`${dificuldade[i]}`+' && a.data like '+`"${datas}%"`+') && (a.Hora_inicio >= "18:00:00" && a.Hora_inicio < "23:59:59")  group by mes order by a.Hora_inicio;', {
      type: QueryTypes.SELECT
    });
  
    if(noite.length < 1){
      noites.push([{valor:0}])
    }else{
      noites.push(noite)
    }
 
  }

  res.json({
    madrugadas,
    manhas,
    tardes,
    noites

  });


};


// Dados Graficos dois
export const data4 = async (req: Request, res: Response)=>{

  let ano = req.query.ano;
  let mes = req.query.mes;
  var datas = ano+'-'+mes;

  let nome = req.query.nome


  const facil = await sequelizes.query('select  count(a.idAtendimento) AS soma,f.nome,f.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID inner join funcionario f on f.id = a.funcionario_ID where (t.Tempo_medio <= 2400  && a.data like '+`"${datas}%"`+') group by f.id order by f.id;', {
      type: QueryTypes.SELECT
  });

  const medio = await sequelizes.query('select  count(a.idAtendimento) AS soma, f.nome,f.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join funcionario f on f.id = a.funcionario_ID where (t.Tempo_medio > 2400  && t.Tempo_medio <= 12000)  && a.data like '+`"${datas}%"`+' group by f.id order by f.id;', {
      type: QueryTypes.SELECT
  });

  const dificil = await sequelizes.query('select  count(a.idAtendimento) AS soma, f.nome ,f.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join funcionario f on f.id = a.funcionario_ID where (t.Tempo_medio > 12000  && a.data like '+`"${datas}%"`+') group by f.id order by f.id;', {
      type: QueryTypes.SELECT
  });

  res.json({
     facil,
     medio,
     dificil,
     nome
  });

};

export const data5 = async (req: Request, res: Response)=>{

  let ano = req.query.ano;
  let mes = req.query.mes;
  var datas = ano+'-'+mes;

  let nome = req.query.nome


  const facil = await sequelizes.query('select  count(a.idAtendimento) AS soma, c.nome,c.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join cliente c on c.id = a.cliente_ID where t.Tempo_medio <= 2400  && a.data like '+`"${datas}%"`+' group by c.id order by c.id;', {
      type: QueryTypes.SELECT
  });

  const medio = await sequelizes.query('select  count(a.idAtendimento) AS soma, c.nome,c.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join cliente c on c.id = a.cliente_ID where (Tempo_medio > 2400  && Tempo_medio <= 12000)  && a.data like '+`"${datas}%"`+' group by c.id order by c.id;', {
      type: QueryTypes.SELECT
  });

  const dificil = await sequelizes.query('select  count(a.idAtendimento) AS soma, c.nome,c.id from atendimento a inner join trabalho t on  t.id = a.trabalho_ID right join cliente c on c.id = a.cliente_ID where Tempo_medio > 12000 && a.data like '+`"${datas}%"`+' group by c.id order by c.id;', {
      type: QueryTypes.SELECT
  });

  res.json({
     facil,
     medio,
     dificil,
     nome
  });

};