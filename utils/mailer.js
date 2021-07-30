const nodemailer = require("nodemailer");

function sendemail(email, username){
let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "poggersPlanOnGaming@outlook.com", 
    pass: "PoggersPogPog" 
  },
});

  let info ={
    from: `poggersPlanOnGaming@outlook.com`, // sender address
    to: email, // list of receivers
    subject: `Welcome ${username} to POG!`, // Subject line
    text: `Congrats you signed up! You rock!`, // plain text body
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>POG</title>
      <link rel="stylesheet" href="/css/jass.css">
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <div class="flex-column justify-space-around">
        <header class="display-flex justify-space-between align-center p-2">
          <h1>
            <a href="https://poggers-pog.herokuapp.com/login">POGGERS</a>
          </h1><b>YOU ROCK FOR SIGNING UP!</b>`
  };

// COME BACK TO PUT LINK TO LIVE SITE ^^^^^^ //

transporter.sendMail(info, function(err, info) {
  if(err){
    console.log(err);
    return;
  }
  console.log("sent: " + info.response);
});
};

module.exports = sendemail;