const express = require('express');
const cors = require('cors');
const router = require('./src/routes');
const { boomErrorHandler, errorHandler } = require('./src/middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

router(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
