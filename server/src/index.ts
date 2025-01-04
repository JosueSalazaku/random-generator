import express from 'express';
import dotenv from 'dotenv'
import { db } from './db/db';


dotenv.config();
const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('hello Server')
  })


app.listen(port, () => {
    console.log(`Server Online on ${port}`)
})