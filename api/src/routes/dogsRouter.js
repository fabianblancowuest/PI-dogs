const { Router } = require("express");
const {
	createDogHandler,
	getDogHandler,
	getDogByIdHandler,
	putDogHandler,
	deleteDogHandler,
} = require("../handlers/dogsHandler");

const dogsRouter = Router();

dogsRouter
	.get("/:id", getDogByIdHandler)
	.get("/", getDogHandler)
	.post("/post", createDogHandler)
	.put("/:id", putDogHandler)
	.delete("/:id", deleteDogHandler);

module.exports = dogsRouter;
