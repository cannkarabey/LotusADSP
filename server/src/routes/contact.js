import { Router } from 'express'
import { sendMail } from '../utils/mailer.js'


const router = Router()


router.post('/', async (req, res) => {
try {
const { name, email, message } = req.body
if (!name || !email || !message) return res.status(400).json({ error: 'Eksik alan' })


await sendMail({
from: process.env.SMTP_USER,
to: process.env.MAIL_TO,
subject: `Web İletişim: ${name}`,
text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`
})


res.json({ ok: true })
} catch (err) {
res.status(500).json({ error: 'Mail gönderilemedi' })
}
})


export default router