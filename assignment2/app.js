const express = require("express");
const app = express();
const port = 8080;
const Date = require("./date");

// this is middleware for processing the data
app.use(express.urlencoded({ extended: false })); // request.body ?  to get
app.use(express.json());
// middelware :  static file
app.use(express.static("public"));

// mongodb schemas and connect
const connect = require("./schemas");
connect();

// goods router
const goodsRouter = require("./routes/goods");
app.use("/goods", [goodsRouter]);

//posts router
const postsRouter = require("./routes/posts");
app.use("/posts", [postsRouter]);

// // mongoose  connect
// const mongoose = require("mongoose");
// app.get("/mongodb", async (req, res) => {
//   await mongoose.connect("mongodb://localhost/asg1", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//     useCreateIndex: true,
//   });
//   const { Schema } = mongoose;
//   const blogsSchema = new Schema({
//     postId: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     title: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     contents: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: String,
//       required: true,
//     },
//     pw: {
//       type: Number,
//       required: true,
//     },
//   });

//   let blogs = mongoose.model("blogs", blogsSchema);
//   await blogs.create({
//     postId: 1,
//     title: "맛있는 저녁",
//     author: "skyler",
//     contents: "healla heptic day ",
//     date: Date(),
//     pw: 123123,
//   });

//   res.send("ok");
// });

//ejs
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//middleware-custome
app.use((req, res, next) => {
  console.log(req);
  next();
});

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/detail", (req, res) => {
  res.render("detail");
});

app.get("/write", (req, res) => {
  res.render("post");
});

app.get("/update", (req, res) => {
  res.render("update");
});

app.get("/test", (req, res) => {
  let name = req.query.name;
  res.render("test", { name });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
