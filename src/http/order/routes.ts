import { Router } from "express";
import { createOrderIndex } from "./createOrder";

const route = Router();

route.get('/', createOrderIndex)

export default route;