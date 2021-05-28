import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Oi Mário!"})
});

app.listen(3333, () => {
  console.log("Server start 😊.")
})