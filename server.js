import express from 'express';

export function runServer(handlers) {
  const app = express();
  app.use(express.json());

  // Define the routes
  app.get("/", (req, res) => {
    res.send(handlers.info());
  });

  app.post("/start", (req, res) => {
    handlers.start(req.body);
    res.send("ok");
  });

  app.post("/move", (req, res) => {
    res.send(handlers.move(req.body));
  });

  app.post("/end", (req, res) => {
    handlers.end(req.body);
    res.send("ok");
  });

  const port = process.env.PORT || 8000;
  const host = '0.0.0.0'; 

  app.listen(port, host, () => {
    console.log(`Battlesnake API listening on port ${port}`);
  });
}
