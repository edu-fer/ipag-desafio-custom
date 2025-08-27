import { Router } from "express";

const route = Router();

route.post('/', (req, res) => {console.log(req); return res.status(200).json({success: true})})