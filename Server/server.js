const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.listen(5173, console.log("Server started on PORT 5000"));
