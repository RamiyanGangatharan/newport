const nodemailer = require('nodemailer');
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECEIVER_EMAIL, DEFAULT_SUBJECT } = require('./SMTP-config');

export default async function handler(req, res) {
    if (req.method !== 'POST') {res.status(405).json({ message: 'Method Not Allowed' });  return; }
    const { fname, lname, phone, mail, subject, message } = req.body;
    
    if (!fname || !lname || !mail || !message) { res.status(400).json({ message: 'Missing required fields' }); return; }
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: SMTP_PORT, auth: {user: SMTP_USER, pass: SMTP_PASS,},});

    try {
        const info = await transporter.sendMail({
            from: `"${fname} ${lname}" <${mail}>`, 
            to: RECEIVER_EMAIL,                     
            subject: subject || DEFAULT_SUBJECT,    
            text: `
                Name: ${fname} ${lname}
                Phone: ${phone || 'Not provided'}
                Email: ${mail}
                Subject: ${subject || 'No subject'}
                Message: ${message}
            `,
        });

        res.status(200).json({ message: 'Email sent successfully!', info });
    } 
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
}