const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "banditelexture@gmail.com",
        pass: "pphxdpvqwajkgpka"
    }
});

async function test() {
    try {
        console.log("Attempting to send email...");
        const info = await transporter.sendMail({
            from: "banditelexture@gmail.com",
            to: "banditelexture@gmail.com", // Send to self
            subject: 'Test Email',
            text: 'This is a test email to verify credentials.'
        });
        console.log("Email sent successfully!", info.messageId);
    } catch (err) {
        console.error("Failed to send email:", err.message);
    }
}

test();
