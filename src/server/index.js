const express = require('express');

const app = express();
const path = require('path');

app.use(express.static('dist'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(8080, () => console.log('Listening on port 8080!'));
