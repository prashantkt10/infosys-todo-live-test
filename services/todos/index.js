const axios = require("axios").default;
const { TODO_API_URL } = require("../../constants/todo");
const { mongoClient } = require("../../datasource/mongodb");
const mongo = mongoClient.db('infosys').collection('todos');

const fetchFromTodoAPI = () => {
    return axios.get(TODO_API_URL);
}

const fetchFromTodoMongo = ({ todoId }) => {
    return mongo.findOne({ id: Number(todoId) });
}

const insertIntoMongoDB = async () => {
    const todos = await fetchFromTodoAPI();
    if (!todos?.data?.length)
        return Promise.reject('Failed to fetch data from todos API');
    await mongo.insertMany(todos.data);
}

module.exports = {
    fetchFromTodoAPI,
    fetchFromTodoMongo,
    insertIntoMongoDB
};