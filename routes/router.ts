import { Router, Request, Response} from 'express';

const router = Router();


router.get('/messages', ( req: Request, res: Response) => {
    res.json( {
        ok: true,
        message: 'Todo está bien!!'
    })
});

router.post('/messages/:id', ( req: Request, res: Response) => {
    const body  = req.body.body;
    const from  = req.body.from;
    const id    = req.params.id;
    res.json( {
        ok: true,
        message: 'POST - Todo está bien!!',
        from,
        body,
        id
    })
});


export default router;