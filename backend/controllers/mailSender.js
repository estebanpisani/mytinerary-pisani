const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const mailSender = async (email, name, uniqueString) => {
    let url = 'http://localhost:4000';

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
        from: `MyTinerary <${process.env.USER}>`,
        to: email,
        subject: 'Verify account',
        html: `
                <table
                    style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #b8cce2;width:100%"
                    cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100"
                                style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                                <div style="width: 100% !important;">
                                    <!--[if (!mso)&(!IE)]><!-->
                                    <div
                                    style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                    <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0"
                                        cellspacing="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:5px;font-family:'Raleway',sans-serif;"
                                            align="left">
                                            <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                <tr style="vertical-align: top">
                                                    <td
                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                    <span>&#160;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #44b587;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                    <div
                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                        <table id="u_content_text_7" style="font-family:'Raleway',sans-serif;" role="presentation"
                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                            <td class="v-container-padding-padding"
                                                style="overflow-wrap:break-word;word-break:break-word;padding:10px 20px;font-family:'Raleway',sans-serif;"
                                                align="left">
                                                <div class="v-text-align"
                                                style="color: #132f40; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 150%; text-align: center;"><span
                                                    style="color: #ecf0f1; font-size: 14px; line-height: 21px;"><span
                                                        style="font-size: 14px; line-height: 21px;"><em><span
                                                            style="font-family: georgia, palatino; font-size: 14px; line-height: 21px;">MyTinerary</span></em></span></span>
                                                </p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                    <div
                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                        <table id="u_content_text_1" style="font-family:'Raleway',sans-serif;" role="presentation"
                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                            <td class="v-container-padding-padding"
                                                style="overflow-wrap:break-word;word-break:break-word;padding:8px 20px 5px;font-family:'Raleway',sans-serif;"
                                                align="left">
                                                <div class="v-text-align"
                                                style="color: #132f40; line-height: 100%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 100%;"><span
                                                    style="font-family: Rubik, sans-serif; font-size: 14px; line-height: 14px;">Hello
                                                    <strong>${name}</strong>,</span></p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0"
                                        cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                            <td class="v-container-padding-padding"
                                                style="overflow-wrap:break-word;word-break:break-word;padding:6px 20px 10px;font-family:'Raleway',sans-serif;"
                                                align="left">
                                                <div class="v-text-align"
                                                style="color: #333333; line-height: 120%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 120%; text-align: left;"><strong>You're almost
                                                    done</strong>. The last step is to click the link below to activate your
                                                    account. As soon as you are redirected back to the site, make sure to
                                                    <strong>login</strong>.
                                                </p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d5f7e6;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                    <div
                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                        <table id="u_content_button_1" style="font-family:'Raleway',sans-serif;" role="presentation"
                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                            <td class="v-container-padding-padding"
                                                style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:'Raleway',sans-serif;"
                                                align="left">
                                                <div class="v-text-align" align="center">
                                                <a href="${url}/api/auth/verify/${uniqueString}" target="_blank"
                                                    style="box-sizing: border-box;display: inline-block;font-family:'Raleway',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #2dc26b; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #f1c40f; border-top-style: solid; border-top-width: 2px; border-left-color: #f1c40f; border-left-style: solid; border-left-width: 2px; border-right-color: #f1c40f; border-right-style: solid; border-right-width: 2px; border-bottom-color: #f1c40f; border-bottom-style: solid; border-bottom-width: 2px;">
                                                    <span style="display:block;padding:10px 25px;line-height:120%;"><span
                                                        style="font-size: 14px; line-height: 16.8px;">&nbsp;Active Your Account
                                                        &gt;&gt;</span></span>
                                                </a>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #132f40;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                    <div
                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                        <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0"
                                        cellspacing="0" width="100%" border="0">
                                        <tbody>
                                            <tr>
                                            <td class="v-container-padding-padding"
                                                style="overflow-wrap:break-word;word-break:break-word;padding:5px;font-family:'Raleway',sans-serif;"
                                                align="left">
                                                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0"
                                                width="100%"
                                                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                    <tr style="vertical-align: top">
                                                    <td
                                                        style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                        <span>&#160;</span>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            `
    }


    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sended to ' + email);
        }
    })
}

module.exports = mailSender;



