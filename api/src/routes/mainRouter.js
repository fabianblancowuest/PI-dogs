const { Router } = require("express");
// const loadTemperaments = require("../controllers/non-use/loadTemperaments");
// const loadDogs = require("../controllers/non-use/loadDogs");
// const getAllDogs = require("../controllers/non-use/getAllDogs");
// const { getDogDetail } = require("../controllers/non-use/getDogDetail");
// const { postDog } = require("../controllers/non-use/postDog");

// New imports from handlers
const dogsRouter = require("./dogsRouter");
const temperamentsRouter = require("./temperamentsRouter");
const mainRouter = Router();

// router
// 	.get("/loadTemperaments", loadTemperaments)
// 	.get("/loadDogs", loadDogs)
// 	.get("/getAll", getAllDogs)
// 	.get("/dogDetail/:id", getDogDetail)
// 	.post("/postDog", postDog);

// New routes

mainRouter.use("/temperaments", temperamentsRouter);
mainRouter.use("/", dogsRouter);

module.exports = mainRouter;
