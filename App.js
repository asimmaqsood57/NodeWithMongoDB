//0LCMnJ764HlqoNkL
const express = require("express");

const app = express();

const mongoose = require("mongoose");
// const users = require("./users");

const Users = require("./users");
// mongodb+srv://new-user_31:<password>@cluster0.plewu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

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
const data = new Users({
  _id: mongoose.Types.ObjectId(),
  name: "Jawad",
  email: "jawad@gmail.com",

  address: "Rokhari",
});

data
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
