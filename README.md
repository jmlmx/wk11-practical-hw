                                            //===== INITIAL SETUP =====//<br>

STEP #1;<br>
Create Node.js project. Run the following commands in terminal.<br>
    mkdir (chosen todo api name)<br>
    cd (said chosen name)<br>
    touch server.js<br>
    npm init -y<br>
    touch app.js<br>

STEP #2;<br>
Install the following packages in terminal.<br>
    npm i express mongoose dotenv bcrypt jsonwebtoken morgan<br>
    npm i --save-dev jest supertest mongodb-memory-server artillery@1.7.9<br>

STEP #3;<br>
CREATE A .gitignore file to hold .env & node_modules. No need to push these into the repo.<br>
STEP #4;<br>
Initialize as a git repo using the following command.<br>
    git init<br>

STEP #5;<br>
Add MONGO_URI connection string to .env file. Get this address from MongoDB. Remember to change the path name before the question mark.<br>

STEP #6;<br>
Add the following code to server.js file. This will allow you app to use the dotenv package.<br>
    require('dotenv').config()<br>
                            
                            //===== BUILDING THE API W/ MONGOOSE & EXPRESS =====//<br>

STEP #7;<br>
Create models folder & todo.js file = models/todo.js (This file will hold the Todo schema.)<br>
    - Check todo.js for code.<br>

STEP #8;<br>
Create routes folder & todoRoutes.js file = routes/todoRoutes.js (This file will hold MVC architecture routes.)<br>
    -Check todoRoutes.js for code.<br>

STEP #9;<br>
Create controllers folder & todoControllers.js file = controllers/todoControllers.js (This file will hold MVC architecture controllers.)<br>
    -Check todoControllers.js for code.<br>

STEP #10;<br>
Add todo routes, app setup & middleware inside app.js file.<br>
    -Check app.js for code. Should include boiler plate & morgan middleware.<br>

STEP #11;<br>
Add boiler plate code and mongoose connection middleware  to server.js file.<br>
    -Check server.js for code.<br>
                                    
                                    //====== SETUP TESTING FOR API ======//<br>

STEP #12;<br>
Configure Jest in package.json file.<br>
    Add the following code:<br>
             "scripts": {<br>
                "start": "node server.js",<br>
                "test": "jest",<br>
                "dev": "nodemon",<br>
                "load": "artillery run artillery.yml"<br>
            },<br>
            "jest": {<br>
                "testEnvironment": "node"<br>
            }<br>

STEP #13;<br>
Create tests folder & todo.test.js file (This file will fold testing endpoints for the API)<br>
    -Check todo.test.js for code. Should include boiler plate, mongo server middleware to connect, start/stop/close & all testing endpoints.<br>

STEP #14;<br>
    Create artillery.yml file in root directory.<br>
        -Check artillery.yml file for code. Note: Remember that spacing matters when setting up code.<br>

STEP #15;<br>
RUN THE FOLLOWING TESTS IN TERMINAL.<br>
    npm run test (This will test the endpoint routes. If all pass, then proceed to testing API load.)<br>
    npm run load (This will test the capability of the API. Based on number of users per minute. Check different scenarios and phases.)<br>
