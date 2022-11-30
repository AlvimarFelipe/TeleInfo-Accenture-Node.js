import { Router } from 'express';



import * as cadastroController from '../controllers/cadastroController';
import * as HomeController from '../controllers/homeController';
import * as testeController from '../controllers/testeController';
import * as resumoController from '../controllers/resumoController';

import * as Grafico1Controller from '../controllers/GraficosController';
import * as selectController from '../controllers/selectDataGraficoController';


const router = Router();

router.get('/', cadastroController.cadastro);

router.get('/home', HomeController.home);

router.get('/teste',testeController.conteudo);


router.get('/dataresumo',resumoController.conteudo);

router.get('/dadosgraficos',Grafico1Controller.data1);
router.get('/dadosgraficos2',Grafico1Controller.data2);
router.get('/dadosgraficos3',Grafico1Controller.data3);
router.get('/dadosgraficos7',Grafico1Controller.data4);
router.get('/dadosgraficos8',Grafico1Controller.data5);



router.get('/selectdata',selectController.select1);
router.get('/selectname',selectController.select2);
router.get('/selectcliente',selectController.select3);


  
export default router;