var express = require('express');
var router = express.Router();

// ******** User Signup ******** 

router.post("/addUser", (request, response) => {
    console.log('In User addUser', request.body)

    database.collection("userTable").insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});


// ******** Fetch User Info using email ******** 
router.get("/getAllUsers", (request, response) => {

    console.log('In User getAllUsers')
    database.collection("userTable").find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});


module.exports = router;

//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/