import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
  console.log("home page rendering ... ")
});

app.get("/about", (req, res)=>{
  res.render("about.ejs");
  console.log("Rendring the about page");
});

app.get("/contact", (req, res)=>{
  res.render("contact.ejs");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
