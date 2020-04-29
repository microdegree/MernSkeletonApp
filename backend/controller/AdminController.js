var express = require('express');
var router = express.Router();

// // ******** Get All Appointments ******** 
// router.get("/getDoctorAppointments", (request, response) => {

//     console.log('In Get Appointments')
//     database.collection("appointmentsTable").find({}).toArray((error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }

//         console.log(result)
//         response.send(result);
//     });
// });

// ******** Update Project Info ******** 
router.post("/updateProjectInfo", (request, response) => {

    console.log('Update Info  ', request.body.email);
    console.log('Update Info  ', request.body);


    database.collection("projectInfoTable").update({ "email": request.body.email },
        request.body,
        { upsert: true },
        (error, result) => {

            //console.log('result ', result)
            console.log('result object id ', result.objectId)
            response.send(result);
            console.log('err : ', error)

        })

});

//File Upload Library
var multer = require('multer')
let uploadedFileName
var storage = multer.diskStorage(
    {
        destination: './backend/uploads/',
        filename: function (req, file, cb) {
            //req.body is empty...
            //How could I get the new_file_name property sent from client here?
            uploadedFileName = Date.now() + '-' + file.originalname
            cb(null, uploadedFileName);
        }
    }
);
var upload = multer({ storage: storage });


router.post('/uploadProjectImage', upload.single('avatar'), function (request, response) {
    console.log('upload Image controller')
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    try {
        console.log('uploadedFileName ', uploadedFileName)
        response.send({ 'uploadedFileName': uploadedFileName });
    } catch (err) {
        response.send(400);
    }

})

module.exports = router;