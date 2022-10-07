const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 연결이 되면, 콜백함수를 실행하세요.
io.on("connection", (socket) => {
  console.log(`${socket.id}가 접속되었습니다.`);

  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
});

http.listen(4000, () => {
  console.log(`Connected at 4000`);
});
