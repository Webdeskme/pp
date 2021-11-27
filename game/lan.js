const express = require('express')
const { shell } = require("electron");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000
const os = require("os");
const ifaces = os.networkInterfaces();
var players = {};
var holding = [];
console.log(__dirname + '/www');
app.use('/', express.static(__dirname + '/www'))
io.on('connection', function (socket) {
console.log('a user connected');
players[socket.id] = "no";
holding.push(socket.id);
if(holding.length > 1){
  var a = holding.shift();
  var b = holding.shift();
  players[a] = b;
  players[b] = a;
  io.to(a).emit("player", 1);
  io.to(b).emit("player", 2);
  io.to(a).emit("vs", b);
  io.to(b).emit("vs", a);
}
socket.on('cards', function (cards, health) {
  io.to(players[socket.id]).emit('cards', cards, health);
});
socket.on('p', function (p) {
  io.to(players[socket.id]).emit('p', p);
});
socket.on('sel', function (c) {
  io.to(players[socket.id]).emit('sel', c);
});
socket.on('bsel', function (c) {
  io.to(players[socket.id]).emit('bsel', c);
});
socket.on('aq', function (cards, p, mis, l) {
  io.to(players[socket.id]).emit('aq', cards, p, mis, l);
});
socket.on('tend', function (cards, dis) {
  io.to(players[socket.id]).emit('tend', cards, dis);
});
socket.on('next', function (cards, p, health, mis) {
  io.to(players[socket.id]).emit('next', cards, p, health, mis);
});
socket.on('end', function (type) {
  io.to(players[socket.id]).emit('end', type);
});
socket.on('timed', function () {
  delete holding[socket.id];
});
socket.on('emo', function (emo) {
  io.to(players[socket.id]).emit('emo', emo);
});
socket.on('disconnect', function () {
  console.log('user disconnected');
  io.to(players[socket.id]).emit("dis", "yes");
  delete players[socket.id];
  delete holding[socket.id];
  console.log(players);
});
});

//gui
server.listen(port, () => {
  console.log('listening on *:3000');
});

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    var myIP = "";
    var cmyIP = "";
    var amyIP = "";
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      cmyIP += `http://${iface.address}:${port}`;
    } else {
      // this interface has only one ipv4 adress
      cmyIP += `http://${iface.address}:${port}`;
    }
    ++alias;
    //console.log(cmyIP);
    document.getElementById("localAdd").innerHTML = '<u>' + cmyIP + '</u>';
    document.getElementById("localAdd").onclick = function() {shell.openExternal(cmyIP);};
    /*$("#localAdd").text(cmyIP);
    $("#localAdd").click(function () {
      shell.openExternal(cmyIP);
    });*/
  });
});
