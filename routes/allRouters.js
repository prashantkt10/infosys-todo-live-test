const route = require("express").Router();
const { healthCheck } = require("../controllers/health/health");
const { fetchTodosFromAPI, insertTodos } = require("../controllers/todos");

route.get("/health", healthCheck);
route.get("/todos", fetchTodosFromAPI);
route.post("/todos", insertTodos);

module.exports = {
    route
}