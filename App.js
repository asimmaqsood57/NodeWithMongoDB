//0LCMnJ764HlqoNkL
const express = require("express");

const app = express();

const mongoose = require("mongoose");

// mongodb+srv://new-user_31:<password>@cluster0.plewu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(
    "mongodb+srv://new-user_31:0LCMnJ764HlqoNkL@cluster0.plewu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/youtube", ///youtube database Name
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("db connected done");
  });
