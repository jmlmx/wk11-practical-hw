const request = require("supertest")
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const app = require("../app")
const server = app.listen(8080, () => console.log("Testing on Port 8080"))
const Todo = reuire("../models/todo")
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe("RTest the todo endpoints", () => {
    test("It should create a new todo", async () => {
        const response = await request(app)
            .post("/todos")
            .send({
                
            })
    })
})