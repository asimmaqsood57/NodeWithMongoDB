//0LCMnJ764HlqoNkL
const express = require("express");

const app = express();

const mongoose = require("mongoose");
// const users = require("./users");

const Users = require("./users");
// mongodb+srv://new-user_31:<password>@cluster0.plewu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

mongoose.connect(
  "mongodb+srv://new-user_31:0LCMnJ764HlqoNkL@cluster0.plewu.mongodb.net/youtube?retryWrites=true&w=majority", ///youtube database Name
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//   .then(() => {
//     console.log("db connected done");
//   });

// Users.find({}, (err, users) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(users);
// }); // null obj means return all data

//inserting record into database
// const data = new Users({
//   _id: mongoose.Types.ObjectId(),
//   name: "Jawad",
//   email: "jawad@gmail.com",

//   address: "Rokhari",
// });

// data
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

//fetching data from database through get api

app.get("/users", (req, res) => {
  Users.find()
    .select("name")
    .then((data) => {
      // console.log(data);
      res.json(data);
    });
});

//making post Api

//1  Make post router
//2 Add json body-parser  pakage
//3 Apply Body-Parser
//4 write code  for save data in mongodb
//5 Test with post man

// app.post("/user", jsonParser, (req, res) => {
//   const data = new Users({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     email: req.body.email,
//     address: req.body.address,
//   });
//   data
//     .save()
//     .then((result) => {
//       res.status(201).json(result);
//     })
//     .catch((err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
// });

//delete  api
//1 Make delete router
//2 write code for delete data in mongodb
//3 test with postman

app.delete("/user/:id", (req, res) => {
  Users.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

//put api

app.put("/user/:id", jsonParser, (req, res) => {
  Users.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
      },
    }
  )
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

//serach api

app.get("/search/:name", (req, res) => {
  var regex = new RegExp(req.params.name, "i"); //i is for small and capital letters

  Users.find({ name: regex }).then((result) => {
    res.status(200).json(result);
  });
});

app.listen(80);
