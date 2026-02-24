import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

import { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } from "../utils/secretDB/secretDB.js";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized: false
  }
});

export const connectionDB = pool;

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
