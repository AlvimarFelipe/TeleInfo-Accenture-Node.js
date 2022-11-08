import { Request, Response } from 'express';
import { Router } from 'express';

import * as HomeController from '../controllers/homeController';

const router = Router();

router.get('/', HomeController.home);


router.get('/noticias', (req: Request, res: Response)=>{
    res.json({
        data: ["05/9", "06/9", "07/9", "08/9", "09/9","10/9","11/9","12/9"], 
        valor: [25, 35, 20, 15, 18, 14, 35, 40],
        valor2: [18, 10, 10, 18, 14, 17, 20, 7]
    });
});

export default router;