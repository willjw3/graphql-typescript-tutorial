
const { Pool } = require('pg');
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: 'ts-gql',
  password: process.env.DB_PASS,
  port: 5432,
})



