const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;
const path = require('path');
const server = "mongodb+srv://root:root@cluster0.vj971.mongodb.net/app-drawer?retryWrites=true&w=majority"

/* Define the app and dotfile schema for sever. */
var appSchema = new mongoose.Schema({
  name: String,
  descr: String,
  icon: String,
  url: String
});
/* Define models. */
var appModel = mongoose.model("apps", appSchema);

/* Set up cors and body-parser. */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/* Hook up build folder. */
app.use(express.static(path.join(__dirname, '/../build')));
app.use('/static', express.static(path.join(__dirname, '/build/static')));

/* Connect to database. */
mongoose.connect(server, {
  useNewUrlParser: true,
  /* Silence deprecation warning. */
  useUnifiedTopology: true
});

/* Handle DELETE. */
app.delete('/api/apps/:id', function(req, res) {
  appModel.deleteOne({_id: req.params.id}, function(e, data) {
    if (e)
      res.send(e);
    else /* Don't send the data if there was an error. */
      res.send(data);
  });
})

/* Handle PUT from edits. */
app.put('/api/apps', (req, res) => {
  appModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
    res.send(data);
  })
})

/* Handle POST from front end for apps. */
app.post('/api/apps', (req, res) => {
  /* Create document on server. */
  appModel.create({
    name: req.body.name,
    descr: req.body.descr,
    icon: req.body.icon,
    url: req.body.url
  });
})

/* Send back app JSON data on ID search. */
app.get('/api/apps/:id', (req, res) => {
  appModel.findById(req.params.id, (data) => {
    res.json(data);
  });
})

/* Send back JSON API on GET from front end for apps. */
app.get('/api/apps', (req, res) => {
  appModel.find((err, data) => {
    res.json(data);
  });
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})