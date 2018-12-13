const express = require('express');
const path = require('path');

var projectController = require('./projects.controller');

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/api/getAllProposedProjects", projectController.getAllProposedProjects);
app.get("/api/getAllCurrentProjects", projectController.getAllCurrentProjects);
app.get("/api/getAllArchivedProjects", projectController.getAllArchivedProjects);
app.get("/api/getSelectedProject", projectController.getSelectedProject);

app.post("/api/addProjectProposal", projectController.addProjectProposal);

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../dist/index.html'));
// });

// app.listen(8080, () => console.log('Listening on port 8080!'));


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
