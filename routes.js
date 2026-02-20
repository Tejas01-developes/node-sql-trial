import express from 'express';
import { insert } from './dbinsert.js';


const router=express.Router();


router.post("/",insert);

export default router;