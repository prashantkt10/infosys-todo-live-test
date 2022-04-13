const { fetchFromTodoAPI, fetchFromTodoMongo, insertIntoMongoDB } = require("../../services/todos");

const insertTodos = async (req, res, next) => {
    try {
        await insertIntoMongoDB();
        return res.status(201).json({
            status: "Success",
            statusCode: 200,
            message: "All todo data inserted into mongoDB!"
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            statusCode: 500,
            message: `Server error: ${err.message}`
        });
    }
}

const fetchTodosFromAPI = async (req, res, next) => {
    const { todoId } = req.query;
    if (todoId) {
        const todo = await fetchFromTodoMongo({ todoId });
        return res.json({
            status: "Success",
            statusCode: 200,
            message: "All looks good",
            data: { todo }
        });
    }
    try {
        const todos = await fetchFromTodoAPI();
        return res.json({
            status: "Success",
            statusCode: 200,
            message: "All looks good",
            data: { todos: todos.data }
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            statusCode: 500,
            message: `Server error: ${err.message}`
        });
    }
}

module.exports = {
    insertTodos,
    fetchTodosFromAPI
}