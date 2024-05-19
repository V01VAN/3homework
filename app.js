const express = require('express');
const path = require('path');
const mainRoute = require('./routes/main')
const gamesRouter = require('./routes/games')
const bodyParser = require('body-parser')
const cors = require('./middlewares/corse')

const PORT = 3005;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(  
cors, 
bodyParser.json(),
express.static(path.join(__dirname, 'public')),
mainRoute,
gamesRouter
); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})