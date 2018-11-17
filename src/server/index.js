const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static('dist'));
// app.use(express.static(__dirname + '/public'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html' || 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// app.listen(8080, () => console.log('Listening on port 8080!'));


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
