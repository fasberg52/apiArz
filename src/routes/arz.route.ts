import express from 'express'
import getArz from '../controllers/arz.controller';
import getMesghal from '../controllers/mesghal.controller';

const router = express.Router()

router.get('/arz', getArz)
router.get('/mesghal', getMesghal)

export default router;
