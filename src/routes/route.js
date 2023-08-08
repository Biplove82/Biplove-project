const express = require("express");
const router = express.Router();


const userModels=require("../controllers/userController");

router.post("/createData",userModels.createData)

router.get("/data",userModels.data)

router.update("/update",userModels.Updatedata)

router.delete("/deletdata",userModels.deletdata)