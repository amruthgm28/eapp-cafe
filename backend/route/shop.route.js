import express from 'express';
import { getShop } from '../controller/shop.controller.js';

const router= express.Router()

router.get("/",getShop);

export default router;

