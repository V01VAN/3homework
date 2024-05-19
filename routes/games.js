// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const {sendAllGames,deleteGame,addGameController} = require('../controllers/games')
const {getAllGames,checkIsTitleInArray,updateGamesArray,updateGamesFile,findGameById,deleteGame} = require('../middlewares/middlewares')

gamesRouter.get("/games", getAllGames,sendAllGames)
gamesRouter.delete("/games/:id",getAllGames,checkIsTitleInArray,updateGamesArray,updateGamesFile,findGameById,deleteGame, deleteGame);
gamesRouter.post("/games", getAllGames,checkIsTitleInArray,updateGamesArray,updateGamesFile,findGameById,deleteGame,addGameController)

module.exports = gamesRouter;