/===== INITIAL SETUP =====//
STEP #1;
Create Node.js project. Run the following commands in terminal.
    mkdir (chosen todo api name)
    cd (said chosen name)
    touch server.js
    npm init -y
    touch app.js
STEP #2;
Install the following packages in terminal.
    npm i express mongoose dotenv bcrypt jsonwebtoken morgan
    npm i --save-dev jest supertest mongodb-memory-server artillery@1.7.9
STEP #3;
CREATE A .gitignore file to hold .env & node_modules. No need to push these into the repo.
STEP #4;
Initialize as a git repo using the following command.
    git init
STEP #5;
Add MONGO_URI connection string to .env file. Get this address from MongoDB. Remember to change the path name before the question mark.
STEP #6;
Add the following code to server.js file. This will allow you app to use the dotenv package.
    require('dotenv').config()
                            //===== BUILDING THE API W/ MONGOOSE & EXPRESS =====//
STEP #7;
Create models folder & todo.js file = models/todo.js (This file will hold the Todo schema.)
    - Check todo.js for code.
STEP #8;
Create routes folder & todoRoutes.js file = routes/todoRoutes.js (This file will hold MVC architecture routes.)
    -Check todoRoutes.js for code.
STEP #9;
Create controllers folder & todoControllers.js file = controllers/todoControllers.js (This file will hold MVC architecture controllers.)
    -Check todoControllers.js for code.
STEP #10;
Add todo routes, app setup & middleware inside app.js file.
    -Check app.js for code. Should include boiler plate & morgan middleware.
STEP #11;
Add boiler plate code and mongoose connection middleware  to server.js file.
    -Check server.js for code.
                                    //====== SETUP TESTING FOR API ======//
STEP #12;
Configure Jest in package.json file.
    Add the following code:
             "scripts": {
                "start": "node server.js",
                "test": "jest",
                "dev": "nodemon",
                "load": "artillery run artillery.yml"
            },
            "jest": {
                "testEnvironment": "node"
            }
STEP #13;
Create tests folder & todo.test.js file (This file will fold testing endpoints for the API)
    -Check todo.test.js for code. Should include boiler plate, mongo server middleware to connect, start/stop/close & all testing endpoints.
STEP #14;
    Create artillery.yml file in root directory.
        -Check artillery.yml file for code. Note: Remember that spacing matters when setting up code.
STEP #15;
RUN THE FOLLOWING TESTS IN TERMINAL.
    npm run test (This will test the endpoint routes. If all pass, then proceed to testing API load.)
    npm run load (This will test the capability of the API. Based on number of users per minute. Check different scenarios and phases.)