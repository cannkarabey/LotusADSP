import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contact.js'


const app = express()
app.use(express.json())
app.use(cors())


app.get('/health', (_req, res) => res.json({ ok: true }))
app.use('/api/contact', contactRouter)


export default app