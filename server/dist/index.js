"use strict";

var _path = _interopRequireDefault(require("path"));

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _socket = _interopRequireDefault(require("socket.io"));

var _trucksimTelemetry = _interopRequireDefault(require("trucksim-telemetry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var io = (0, _socket["default"])(server);
var telemetry = (0, _trucksimTelemetry["default"])();
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../../client/dist')));
var log = [];

var logIt = function logIt(txt) {
  log.push({
    timestamp: Date.now(),
    txt: txt
  });
  io.emit("log", log);
};

var currency = function currency() {
  var alts = ['?', '€', '$'];
  return alts[telemetry.getGame().game.id || 0];
};

telemetry.game.on("connected", function () {
  return logIt("Connected");
});
telemetry.game.on("disconnected", function () {
  return logIt("Disconnected");
});
telemetry.game.on("pause", function (paused) {
  return logIt(paused ? "Paused" : "Unpaused");
});
telemetry.game.on("fine", function (fine) {
  return logIt("".concat(fine.offence.name, ", ").concat(currency()).concat(fine.amount.toLocaleString(), " fine"));
});
telemetry.game.on("tollgate", function (tollgate) {
  return logIt("Toll paid ".concat(currency()).concat(tollgate.amount.toLocaleString()));
});
telemetry.game.on("ferry", function (ferry) {
  return logIt("Ferry (".concat(ferry.source.name, " -> ").concat(ferry.target.name, ")"));
});
telemetry.game.on("train", function (train) {
  return logIt("Train (".concat(train.source.name, " -> ").concat(train.target.name, ")"));
});
telemetry.game.on("refuel-payed", function () {
  return logIt("Refueling payed");
});
telemetry.job.on("cancelled", function (data) {
  return logIt("Job cancelled, Penalty: ".concat(currency()).concat(data.penalty.toLocaleString()));
});
telemetry.job.on("delivered", function (data) {
  return logIt("Job delivered, ".concat(currency()).concat(data.revenue.toLocaleString(), " / ").concat(data.earnedXP, "XP"));
});
telemetry.job.on("finished", function (data) {
  return logIt("Job finished");
});
telemetry.job.on("started", function (data) {
  return logIt("New job started");
});
telemetry.truck.on("cruise-control", function (enabled) {
  return logIt("Cruise control ".concat(enabled ? "Enabled" : "Disabled"));
});
telemetry.truck.on("cruise-control-increase", function (data) {
  return logIt("Cruise control increased to ".concat(data.kph, "kph / ").concat(data.mph, "mph"));
});
telemetry.truck.on("cruise-control-decrease", function (data) {
  return logIt("Cruise control decreased to ".concat(data.kph, "kph / ").concat(data.mph, "mph"));
});
telemetry.truck.on("warning", function (warning, enabled) {
  return logIt(enabled ? "Warning: ".concat(warning) : "".concat(warning, " warning disabled"));
});
telemetry.truck.on("emergency", function (emergency, enabled) {
  return logIt(enabled ? "Emergency: ".concat(emergency) : "".concat(emergency, " emergency disabled"));
});
telemetry.truck.on("electric", function (enabled) {
  return logIt("Truck electrical ".concat(enabled ? "ON" : "OFF"));
});
telemetry.truck.on("engine", function (enabled) {
  return logIt("Truck engine ".concat(enabled ? "ON" : "OFF"));
});
telemetry.truck.on("park", function (enabled) {
  return logIt("Parking brake ".concat(enabled ? "ON" : "OFF"));
});
telemetry.truck.on("damage", function (data) {
  return logIt("Truck damage increased ".concat((100 * data.chassis).toFixed(), "%"));
});
telemetry.truck.on("refuel", function (curr, prev) {
  return logIt("Truck refueled from ".concat(prev.amount, " to ").concat(curr.amount));
});
telemetry.trailers.on("coupling", function (id, enabled) {
  return logIt("Trailer #".concat(id + 1, " coupling ").concat(enabled ? "connected" : "disconnected"));
});
telemetry.trailers.on("damage", function (id, data) {
  return logIt("Trailer #".concat(id + 1, " damage increased ").concat((100 * data.chassis).toFixed(), "%"));
});
telemetry.navigation.on("speed-limit", function (data) {
  return logIt("Speed limit changed to ".concat(data.kph, "kph / ").concat(data.mph, "mph"));
});
telemetry.watch({
  interval: 15
}, function (data) {
  io.emit("update", data);
});
io.on('connection', function (socket) {
  io.emit("update", telemetry.data);
  io.emit("log", log);
});
server.listen(3000, function () {
  console.log("TruckSim-Telemetry Demo is running at http://localhost:3000/");
});