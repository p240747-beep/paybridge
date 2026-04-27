import { transactions } from './db.js';

export default function handler(req, res) {
  const total = transactions.length;
  const completed = transactions.filter(t => t.status === 'completed');

  res.json({
    success: true,
    stats: {
      totalTransactions: total,
      totalVolumePKR: transactions.reduce((a, t) => a + t.amount, 0),
      successRate: total ? Math.round((completed.length / total) * 100) : 0,
      pendingCount: transactions.filter(t => t.status === 'pending').length,
      todayTransactions: total,
      todayVolume: transactions.reduce((a, t) => a + t.amount, 0),
      hourlyVolume: [],
      methodBreakdown: {},
      recentTransactions: [...transactions].reverse()
    }
  });
}