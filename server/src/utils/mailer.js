import nodemailer from 'nodemailer'


export function sendMail({ from, to, subject, text }) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
    const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        auth: { user: SMTP_USER, pass: SMTP_PASS }
    })
    return transport.sendMail({ from, to, subject, text })
}