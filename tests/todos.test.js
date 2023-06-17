const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const server = app.listen(8080, () => console.log("Testing on Port 8080"));
const Todo = require("../models/todo");
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
    await Todo.deleteMany()
})

afterAll(async () => {
  await mongoose.connection.close();
  mongoServer.stop();
  server.close();
});

describe("Test the todo endpoints", () => {
  test("It should create a new todo", async () => {
    const response = await request(app).post("/todos").send({
      title: "make dinner",
      description: "cook spaghetti and meatballs",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.todo.title).toEqual("make dinner");
    expect(response.body.todo.description).toEqual(
      "cook spaghetti and meatballs"
    );
    expect(response.body.todo.complete).toEqual(false);
    expect(response.body.todo).toHaveProperty("created_at");
  });

  test("it should get all todos", async () => {
    const todo1 = new Todo({
      title: "Do dishes",
      description: "clean all plates",
    });
    await todo1.save();

    const todo2 = new Todo({
      title: "build table",
      description: "finish putting legs on table",
    });
    await todo2.save();

    const todo3 = new Todo({
      title: "finish book",
      description: "get through the final chapters",
    });
    await todo3.save();

    const todos = [todo1, todo2, todo3];

    console.log(todos, "CLOUD-SCALE!");

    const response = await request(app).get("/todos");
    console.log(response.body, "come on baby!");
    expect(response.statusCode).toBe(200);
    expect(response.body[0, 1, 2]).toHaveProperty("created_at");
  });

  test("It should get a specific todo", async () => {
    const todo = new Todo({
        title: "Do dishes",
        description: "clean all plates",
      });
    await todo.save()
    
    const response = await request(app)
        .get(`/todos/${todo._id}`)
    console.log(todo, "work!")
    
    expect(response.statusCode).toBe(200)
    expect(response.body._id).toEqual(todo.id)
    expect(response.body).toHaveProperty("created_at")
  })

  test("it should update a todo item", async () => {
    const todo = new Todo({
        title: "Do dishes",
        description: "clean all plates",
        complete: false
    })
    await todo.save()

    const response = await request(app)
        .put(`/todos/${todo._id}`)
        .send({title: "Do dishes", description: "clean all plates", complete: true})

    expect(response.statusCode).toBe(200)
    expect(response.body.title).toEqual("Do dishes")
    expect(response.body.description).toEqual("clean all plates")
    expect(response.body.complete).toEqual(true)
  })

  test("it should delete a todo item", async () => {
    const todo = new Todo({
        title: "Do dishes",
        description: "clean all plates",
        complete: false
    })
    await todo.save()

    const response = await request(app)
        .delete(`/todos/${todo._id}`)
    
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("Todo Item Deleted")
  })
});
