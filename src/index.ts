import { application } from "express";


            const app = application;
app.get('/', (req, res) => {console.log(req); return res.status(200).json({success: true})})
app.listen(3000);