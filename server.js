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
      user: "ADD_EMAIL_HERE",
      pass: "ADD_PASSWORD_HERE",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "SEND_TO_EMAIL",
    subject: "MSG",
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
