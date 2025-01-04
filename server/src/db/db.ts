import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg'
import dotenv from 'dotenv';

dotenv.config({ path: './.local.env' }); 


const client = new Client({
    connectionString: process.env.DATABASE_URL
})

client.connect()
export const db = drizzle(client)