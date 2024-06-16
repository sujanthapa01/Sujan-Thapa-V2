const express = require('express');
const app = express();
const router = require('./Routes/router');


app.use(express.json());
app.use('/', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));