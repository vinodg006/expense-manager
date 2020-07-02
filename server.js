const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

//BodyParser Middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

  //Use Routes
  app.use('/api/users', require('./routes/api/users'));
  app.use('/api/auth',require('./routes/api/auth'));
  app.use('/api/expense',require('./routes/api/expense'))
  app.use("/api/income", require('./routes/api/income'));

  //Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));
  
    app.use("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));