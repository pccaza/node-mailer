const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 400,
    auth: {
      user: "sprkdigitalmail@gmail.com",
      pass: "retrer-xamwo1-nefkUq",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "sprkdigitalmail@gmail.com",
    subject: "Potential Lead",
    text: req.body.message + " " + req.body.website + " " + req.body.email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("email successfuly sent");
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
