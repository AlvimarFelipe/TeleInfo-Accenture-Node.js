import { Router } from 'express';



import * as cadastroController from '../controllers/cadastroController';
import * as HomeController from '../controllers/homeController';
import * as testeController from '../controllers/testeController';
import * as graficosController from '../controllers/graficosController';
import * as selectDataController from '../controllers/selectDataController';
const router = Router();

router.get('/', cadastroController.cadastro);

router.get('/home', HomeController.home);

router.get('/teste',testeController.conteudo);

router.get('/adm/noticias',graficosController.data);

router.post('/selectdata',selectDataController.app);



  
export default router;