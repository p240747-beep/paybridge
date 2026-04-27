# 🌉 PayBridge — Pakistan Payment Gateway

> A full-stack digital payment gateway with NayaPay, Easypaisa & JazzCash  
> Built entirely with AI · Vercel-ready · Admin Dashboard included

---

## 📁 Project Structure

```
paybridge/
├── api/
│   ├── transaction.js     ← POST/GET transactions (Vercel Serverless)
│   ├── webhook.js         ← Receive payment confirmations
│   └── stats.js           ← Admin dashboard data
├── public/
│   ├── index.html         ← Main payment page (your users see this)
│   └── admin/
│       └── index.html     ← Admin dashboard (you see this)
├── vercel.json            ← Vercel config
├── package.json           ← Node.js config
└── README.md              ← This file
```

---

## 🚀 Deploy to Vercel (Step by Step)

### Step 1 — Create GitHub Repository

1. Go to **github.com** → Sign in or create account
2. Click **"New repository"** (green button)
3. Name it: `paybridge`
4. Set to **Public**
5. Click **"Create repository"**

### Step 2 — Upload Files

**Option A — Using GitHub Website (easiest):**
1. On your new repo page, click **"uploading an existing file"**
2. Drag ALL the project files into the upload area
3. Make sure to keep the folder structure:
   - `api/transaction.js`
   - `api/webhook.js`
   - `api/stats.js`
   - `public/index.html`
   - `public/admin/index.html`
   - `vercel.json`
   - `package.json`
4. Click **"Commit changes"**

**Option B — Using Git (if installed):**
```bash
git init
git add .
git commit -m "Initial PayBridge deployment"
git remote add origin https://github.com/YOUR_USERNAME/paybridge.git
git push -u origin main
```

### Step 3 — Connect Vercel

1. Go to **vercel.com** → Sign up with GitHub (free)
2. Click **"Add New Project"**
3. Click **"Import"** next to your `paybridge` repo
4. Leave all settings as default
5. Click **"Deploy"** → Wait ~30 seconds
6. 🎉 **Your site is live!**

### Step 4 — Get Your URL

After deployment:
- **Payment Page:** `https://paybridge-xxxx.vercel.app/`
- **Admin Dashboard:** `https://paybridge-xxxx.vercel.app/admin/`
- **API:** `https://paybridge-xxxx.vercel.app/api/transaction`

---

## 🧪 Test Locally First

```bash
# Install Vercel CLI
npm install -g vercel

# Run local dev server
cd paybridge
vercel dev

# Open: http://localhost:3000
```

---

## 📱 Features

| Feature | Description |
|---------|-------------|
| **Payment Page** | Accept PKR via NayaPay, Easypaisa, JazzCash |
| **Deep Links** | Opens banking apps with amount pre-filled |
| **Transaction IDs** | Auto-generated unique TX IDs per payment |
| **QR Code** | Shareable QR for the payment page |
| **Webhook Log** | Live event feed on the payment page |
| **Admin Dashboard** | Full stats, charts, transaction table |
| **API Endpoints** | RESTful API for transactions & webhooks |
| **Serverless** | Vercel edge functions, auto-scales |

---

## 🔌 API Reference

### Create Transaction
```
POST /api/transaction
Content-Type: application/json

{ "amount": 1500, "method": "nayapay", "ref": "yoursite.com" }
```

Response:
```json
{
  "success": true,
  "transaction": { "id": "TX-K9MNP2QR", "amount": 1500, "status": "pending" },
  "deepLink": "nayapay://pay?amount=1500&txid=TX-K9MNP2QR"
}
```

### Get All Transactions
```
GET /api/transaction
```

### Webhook (Payment Complete)
```
POST /api/webhook
{ "txId": "TX-K9MNP2QR", "status": "completed", "method": "nayapay" }
```

### Admin Stats
```
GET /api/stats
```

---

## 🎓 For Your Presentation

1. Open the live Vercel URL on your phone + laptop
2. Show the **QR code** feature → scan with phone
3. Enter an amount → tap NayaPay → show the modal
4. Open **Admin Dashboard** → show real-time stats
5. Refresh the transaction table (auto-refreshes every 30s)
6. Explain the **AI methodology**: sketch → full app in one session

---

*Built 100% by AI (Claude by Anthropic) from a hand-drawn sketch.*
