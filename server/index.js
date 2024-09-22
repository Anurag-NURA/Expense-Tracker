import express from "express";

import { userRoleValidator } from "./middlewares/middlewares.js";
import { objectValidator } from "./validators/objectValidator.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Home Page")
});

app.get("/expenses", userRoleValidator(["ca", "government"]), (req, res) => {
  res.json({
    'Monthly Income': '40K',
    'Annual Income': '12L'
  })
})

app.get("/expenses/:id", userRoleValidator(['user1', 'user2']), (req, res) => {
  res.json({
    'Food': 250,
    'Electricity Bill': 1000,
    'Transport Bill': 800
  })
})

app.post("/expenses/addInfo", (req, res) => {

  const schema = {
    name: String,
    email: String,
    age: Number,
    country: String
  }

  const errors = objectValidator(req.body, schema);
  if (errors?.length > 0) {
    return res.status(400).json({ message: "Info is Invalid", error: errors });
  } else {
    return res.status(200).json({ message: "Info is Valid" });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}...`);
})