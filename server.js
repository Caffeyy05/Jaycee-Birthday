const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;
const ROOM = "jcs-birthday";
const app = express();

app.use(cors({ origin: true, credentials: false }));
app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const names = new Map();
const history = [];
const HISTORY_LIMIT = 100;

function clean(value, max){
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function onlineCount(){
  const room = io.sockets.adapter.rooms.get(ROOM);
  return room ? room.size : 0;
}

function emitPresence(){
  io.to(ROOM).emit("presence:count", onlineCount());
}

function systemMessage(text){
  io.to(ROOM).emit("chat:system", {
    type: "system",
    text,
    createdAt: new Date().toISOString()
  });
}

io.on("connection", socket => {
  socket.join(ROOM);
  socket.emit("chat:history", history);
  emitPresence();

  socket.on("chat:set-name", payload => {
    const next = clean(payload && payload.name, 40);
    if(!next) return;

    const previous = names.get(socket.id);
    names.set(socket.id, next);

    if(!previous){
      socket.to(ROOM).emit("chat:system", {
        type:"system",
        text:`${next} joined the birthday chat 🎉`,
        createdAt:new Date().toISOString()
      });
    }
  });

  socket.on("chat:message", payload => {
    const name = clean((payload && payload.name) || names.get(socket.id) || "Guest", 40) || "Guest";
    const text = clean(payload && payload.text, 500);
    if(!text) return;

    names.set(socket.id, name);

    const message = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
      socketId: socket.id,
      name,
      text,
      createdAt: new Date().toISOString()
    };

    history.push(message);
    if(history.length > HISTORY_LIMIT) history.shift();

    io.to(ROOM).emit("chat:message", message);
  });

  socket.on("chat:typing", payload => {
    const name = clean((payload && payload.name) || names.get(socket.id) || "Someone", 40) || "Someone";
    if(payload && payload.typing){
      socket.to(ROOM).emit("chat:typing", { name });
    }
  });

  socket.on("disconnect", () => {
    const name = names.get(socket.id);
    names.delete(socket.id);

    if(name){
      socket.to(ROOM).emit("chat:system", {
        type:"system",
        text:`${name} left the chat`,
        createdAt:new Date().toISOString()
      });
    }

    emitPresence();
  });
});

server.listen(PORT, () => {
  console.log(`JC's Birthday realtime server running on port ${PORT}`);
});
