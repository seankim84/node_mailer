require('dotenv').config();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    }
}));

var mailOptions = {
    from: 'sean.kim84@gmail.com',
    to: 'sean.kim843@gmail.com',
    subject: 'Sending Email using Node.js[nodemailer]',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

