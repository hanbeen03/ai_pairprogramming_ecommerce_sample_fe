// pages/api/products.js
import { Client } from 'pg';

export default async function handler(req, res) {
  const client = new Client({
    connectionString: 'postgres://postgres:421203@localhost:5432/ai_pairprogramming',
  });
  
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM products');
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ error: '데이터를 가져오지 못했습니다.' });
  } finally {
    await client.end();
  }
}
