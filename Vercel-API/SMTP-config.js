module.exports = {
    SMTP_HOST: process.env.MAILGUN_SMTP_HOST,                 // Mailgun SMTP host
    SMTP_PORT: process.env.MAILGUN_SMTP_PORT,                 // SMTP port
    SMTP_USER: process.env.MAILGUN_SMTP_USER,                 // Mailgun username from environment variables
    SMTP_PASS: process.env.MAILGUN_SMTP_PASS,                 // Mailgun password from environment variables
    RECEIVER_EMAIL: 'ramiyan.gangatharan@dcmail.ca',          // Email recipient
    DEFAULT_SUBJECT: 'WDF FORM',                              // Default subject for the email
};
