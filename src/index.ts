import express from "express";
import jobsController from "./controllers/job";

const app = express();
const port = 3000;

//APi
app.use(jobsController);

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
