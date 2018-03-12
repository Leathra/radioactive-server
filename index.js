const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//look at underlining enviroment and see if they have specified a port to use when running in production
//put boolian statment for development enviroment.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000
