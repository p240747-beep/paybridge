import { transactions } from './db.js';

export default function handler(req, res) {
  const { txId } = req.query;

  const tx = transactions.find(t => t.id === txId);

  if (!tx) {
    return res.json({
      success: false,
      message: '❌ Transaction NOT FOUND (Fake Screenshot)'
    });
  }

  if (tx.status !== 'completed') {
    return res.json({
      success: false,
      message: '⚠ Transaction Pending (Not Verified)'
    });
  }

  return res.json({
    success: true,
    message: '✅ Payment Verified by Server',
    transaction: tx
  });
}