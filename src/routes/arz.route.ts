import express from 'express'
import getArz from '../controllers/arz.controller';

const router = express.Router()

router.get('/arz', getArz)
export default router;
