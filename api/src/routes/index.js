const { Router } = require("express");
const loadTemperaments = require("../controllers/loadTemperaments");
const loadDogs = require("../controllers/loadDogs");
const getAllDogs = require("../controllers/getAllDogs");
const { getDogDetail } = require("../controllers/getDogDetail");
const { postDog } = require("../controllers/postDog");
const router = Router();

router.get("/loadTemperaments", loadTemperaments);

router.get("/loadDogs", loadDogs);

router.get("/getAll", getAllDogs);

router.get("/dogDetail/:id", getDogDetail);

router.post("/postDog", postDog);

module.exports = router;
