"use strict";
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


app.use(bodyParser.json({ type: 'application/json' }))

const port = 8080

let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'fatimaaviles1612@gmail.com',
           pass: 
       }
   });

app.post('/send', (req, res) => {
  const { email } = req.body
  const mailOptions = {
    from: 'fatimaaviles1612@gmail.com', // sender address
    to: email, // list of receivers
    subject: 'Fatima Resume', // Subject line
    html: '<h3>Thank you for your consideration</h3><br><h5>My resume is attached in a pdf format, if you have any question please feel free to contact me.</h5>',// plain text body
    attachments: 
        {   // utf-8 string as an attachment
            filename: 'Fatima-Resume.pdf',
            content: 'Attachments',
		    path: 'Fatima-Resume.pdf'
        }
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
})



 app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))