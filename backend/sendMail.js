const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendMail(name, email, message) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.AUTH_EMAIL,
    subject: `Message from ${name}`,
    html: `
      <div style="
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 30px;
        color: #fff;
        font-family: 'Arial', sans-serif;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      ">
        <h1 style="text-align: center; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #FFD700;">
          📩 New Message from ${name}
        </h1>
        <p style="font-size: 18px; line-height: 1.6; text-align: center; margin-top: 20px; color: #FFD700;">
          "${message}"
        </p>
        <footer style="
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
          opacity: 0.8;
          color: #FFD700;
        ">
          <p>&copy; 2024 ABDUL SAMAD. All rights reserved.</p>
        </footer>
      </div>
    `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: " + error);
  }
}

module.exports = sendMail;
