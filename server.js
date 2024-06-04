import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to the Express server!");
});

app.get('/about', (req, res) => {
  res.send("This is the about page.");
});

app.post('/data', (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).json({ error: 'No data was sent.' });
  }
  res.json({ ...req.body });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});