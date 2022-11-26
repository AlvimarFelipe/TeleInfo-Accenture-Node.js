import { Router } from 'express';



import * as cadastroController from '../controllers/cadastroController';
import * as HomeController from '../controllers/homeController';
import * as testeController from '../controllers/testeController';

import * as Grafico1Controller from '../controllers/GraficosController';
import * as selectController from '../controllers/selectDataGraficoController';


const router = Router();

router.get('/', cadastroController.cadastro);

router.get('/home', HomeController.home);

router.get('/teste',testeController.conteudo);


router.get('/dadosgraficos',Grafico1Controller.data1);
router.get('/dadosgraficos2',Grafico1Controller.data2);
router.get('/dadosgraficos3',Grafico1Controller.data3);
router.get('/dadosgraficos4',Grafico1Controller.data4);



router.get('/selectdata',selectController.select1);
router.get('/selectname',selectController.select2);


  
export default router;