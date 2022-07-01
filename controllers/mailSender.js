const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const mailSender = async (email, uniqueString) => {

    const myOAuth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        'https://developers.google.com/oauthplayground'
    )

    myOAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    })

    const accessToken = myOAuth2Client.getAccessToken();

    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            type: "OAuth2",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: 'mytinerary@contact.com',
        to: email,
        subject: 'Verify account',
        html: `
                <p> Hola Mailén hacé click acá. No es virus. </p>
                <p>
                    <a href=http://localhost:4000/api/auth/verify/${uniqueString}> Verify Account </a>
                </p>
            `
    }

    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sended to '+email);
        }
    })
}

module.exports = mailSender;



