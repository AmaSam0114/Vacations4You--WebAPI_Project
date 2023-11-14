import express from "express";
import { createTour,deleteTour,getAllTour,getSingleTour,getTourBySearch,updateTour } from "../controllers/tourContrller.js";

const router = express.Router()

//create new tour
router.post("/", createTour);
//update new tour
router.put("/:id", updateTour);
//delete new tour
router.delete("/:id", deleteTour);
//get one tour
router.get("/:id", getSingleTour);
//get all tour
router.get("/", getAllTour);
//get tours by search
router.get("/search/getTourBySearch",getTourBySearch)


export default router;