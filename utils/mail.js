const nodemailer = require('nodemailer')

exports.generateOTP = () => {
  let otp = ''
  for (let i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9)
    otp = otp + randVal
  }
  return otp
}

exports.mailTransport = () =>
  nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  })

exports.generateEmailTemplate = (code) => {
  return `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>OTP Email Verification</title>
  </head>
  <body>
    <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
      <tr>
        <td style="padding: 20px; background-color: #fff;">
          <h1 style="font-size: 24px;">OTP Email Verification</h1>
          <p style="margin-bottom: 20px;">Thank you for registering with our service. To complete your registration process, we need to verify your email address. Please use the OTP code provided below to confirm your account:</p>
          <p style="font-size: 20px; font-weight: bold; color: #1c75bc; margin-bottom: 20px;">${code}</p>
          <p style="margin-bottom: 20px;">Alternatively, you can click on the button below to automatically verify your email address.</p>
          <a href="#" style="display: inline-block; background-color: #1c75bc; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none; margin-bottom: 20px;">Verify Email Address</a>
          <p style="margin-bottom: 20px;">Please note that this OTP code is valid for the next 15 minutes only. If you don't verify your email address within this time frame, you will need to request a new OTP code.</p>
          <p>If you have any questions or concerns, please do not hesitate to contact us. We are available 24/7 to assist you.</p>
        </td>
      </tr>
    </table>
  </body>
</html>

    `
}

exports.plainEmailTemplate = (code) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Welcome to [Company Name]!</title>
  </head>
  <body>
    <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
      <tr>
        <td style="padding: 20px; background-color: #fff;">
          <h1 style="font-size: 24px;">Welcome to [Company Name]!</h1>
          <p style="margin-bottom: 20px;">Dear [First Name],</p>
          <p style="margin-bottom: 20px;">We are thrilled to have you as a new member of our community! Our team is committed to providing you with the best possible experience and support as you get started with our service.</p>
          <p style="margin-bottom: 20px;">To help you get started, we've put together some resources and guides that we think you'll find helpful. You can find them by visiting our website or by clicking on the links below:</p>
          <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
            <li><a href="#">Getting Started Guide</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
          <p style="margin-bottom: 20px;">If you have any questions or need further assistance, please don't hesitate to reach out to us. We are always here to help!</p>
          <p>Thank you again for choosing [Company Name]. We look forward to helping you achieve your goals!</p>
        </td>
      </tr>
    </table>
  </body>
</html>
`
}

exports.generatePasswordResetTemplate = () => {
  //   return `<!DOCTYPE html>
  // <html>
  //   <head>
  //     <meta charset="UTF-8">
  //     <title>Password Reset</title>
  //     <style>
  //       body {
  //         font-family: Arial, sans-serif;
  //       }
  //       form {
  //         margin: auto;
  //         width: 50%;
  //         border: 1px solid #ccc;
  //         padding: 20px;
  //         border-radius: 5px;
  //       }
  //       h1 {
  //         text-align: center;
  //       }
  //       label {
  //         display: block;
  //         margin-bottom: 10px;
  //       }
  //       input[type="email"],
  //       input[type="password"] {
  //         width: 100%;
  //         padding: 10px;
  //         border-radius: 3px;
  //         border: 1px solid #ccc;
  //         margin-bottom: 20px;
  //       }
  //       input[type="submit"] {
  //         background-color: #4CAF50;
  //         color: #fff;
  //         padding: 10px 20px;
  //         border: none;
  //         border-radius: 3px;
  //         cursor: pointer;
  //       }
  //       input[type="submit"]:hover {
  //         background-color: #3e8e41;
  //       }
  //       .error {
  //         color: red;
  //         margin-bottom: 10px;
  //       }
  //     </style>
  //   </head>
  //   <body>
  //     <h1>Password Reset</h1>
  //     <form method="POST" action="/reset-password">
  //       <label for="email">Email:</label>
  //       <input type="email" id="email" name="email" required>
  //       <label for="password">New Password:</label>
  //       <input type="password" id="password" name="password" required>
  //       <label for="confirm-password">Confirm Password:</label>
  //       <input type="password" id="confirm-password" name="confirm-password" required>
  //       <input type="submit" value="Reset Password">
  //       <p class="error">Error message goes here</p>
  //     </form>
  //   </body>
  // </html>
  // s`

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Password Reset</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      form {
        margin: auto;
        width: 50%;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 5px;
      }
      h1 {
        text-align: center;
      }
      label {
        display: block;
        margin-bottom: 10px;
      }
      input[type="password"] {
        width: 100%;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
      }
      input[type="submit"] {
        background-color: #4CAF50;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
      input[type="submit"]:hover {
        background-color: #3e8e41;
      }
      .error {
        color: red;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Password Reset</h1>
    <form method="POST" action="/reset-password/{{reset_token}}">
      <label for="password">New Password:</label>
      <input type="password" id="password" name="password" required>
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" required>
      <input type="submit" value="Reset Password">
      <p class="error">Error message goes here</p>
    </form>
  </body>
</html>
`
}

exports.passwordResetSuccessfullTemplate = () => {
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Password Reset Success</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      .success {
        margin: auto;
        width: 50%;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
      }
      h1 {
        text-align: center;
      }
      p {
        margin-bottom: 20px;
      }
      a {
        color: #4CAF50;
      }
    </style>
  </head>
  <body>
    <div class="success">
      <h1>Password Reset Successful</h1>
      <p>Your password has been successfully reset.</p>
      <p><a href="/login">Click here to log in.</a></p>
    </div>
  </body>
</html>
`
}
