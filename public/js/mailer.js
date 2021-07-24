const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(username, userEmail) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `miernickielijah@gmail.com`, // sender address
    to: userEmail, // list of receivers
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
            <a href="/">POGGERS</a>
          </h1><b>COOL THINGS TO SAY</b>`,
  });
// COME BACK TO PUT LINK TO LIVE SITE ^^^^^^ //

  console.log("Holy crap you sent an email", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);