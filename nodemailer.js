const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "huyb1809128@student.ctu.edu.vn",
    pass: "A4#K8tBD",
  },
});

//Bat OFF de su gui mail
//https://myaccount.google.com/lesssecureapps?gar=1&rapt=AEjHL4Ms34t8ay2ik7bMikD1S2aSjheiLbn5TJqFqnnohxkKH-K-ii5nvav1Kz37Y8i0NWRYVOnati4uBFbe67AGgQlwuvQkXA


const mailOptions = {
  from: "huyb1809128@student.ctu.edu.vn",
  to: "ngthaoanh2011@gmail.com",
  subject: "Sending Email using Node JS",
  text: "Hello Thao Anh, we're from Node JS to send you email by Quoc Huy Developer",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
