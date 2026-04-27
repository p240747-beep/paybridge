import { transactions } from './db.js';

export default function handler(req, res) {
  const { txId } = req.body;

  const tx = transactions.find(t => t.id === txId);
  if (tx) tx.status = 'completed';

  res.json({ success: true });
}