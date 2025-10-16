require('dotenv').config();
const nodemailer = require("nodemailer");
const fs = require('fs');

// Create a account or replace with real credentials.

const email = JSON.parse(fs.readFileSync('C:/xampp/htdocs/SportsMS/src/Data/emailconfig.json', 'utf8'));



  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email.to,
    subject: email.subject,
    text: email.text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (err) {
    console.error('Error sending email:', err);
  }

}

sendMail();