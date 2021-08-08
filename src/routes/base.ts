import { Router } from "express";

  import {
    get_all_companies,
    get_company,
    create_company,
  } from "../controllers/base/companyController";


import authMiddleware from "../middlewares/auth";

const baseRouter = Router();


baseRouter.get("/companies", get_all_companies)
baseRouter.get("/companies/:id", get_company)
baseRouter.post("/companies/",create_company)

//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);

export default baseRouter;
