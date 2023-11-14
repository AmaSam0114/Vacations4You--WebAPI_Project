import express from "express";
import { createTour,deleteTour,getAllTour,getSingleTour,getTourBySearch,updateTour } from "../controllers/tourContrller.js";

const router = express.Router()
import { verifyAdmin } from "../utilis/verifyToken.js";

//create new tour
router.post("/",verifyAdmin, createTour);
//update new tour
router.put("/:id",verifyAdmin, updateTour);
//delete new tour
router.delete("/:id",verifyAdmin, deleteTour);
//get one tour
router.get("/:id", getSingleTour);
//get all tour
router.get("/", getAllTour);
//get tours by search
router.get("/search/getTourBySearch",getTourBySearch)


export default router;