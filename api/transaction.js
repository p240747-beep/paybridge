import { transactions } from './db.js';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, method } = req.body;

    const tx = {
      id: 'TX-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
      amount,
      method,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    transactions.push(tx);

    return res.json({ success: true, transaction: tx });
  }

  if (req.method === 'GET') {
    return res.json({ success: true, transactions });
  }
}
