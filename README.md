# 🏨 Orion Hotel Concierge System v2.0

**AI-Powered Hotel Management System** with multilingual chat, automated ticketing, and real-time analytics.

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Deploy Backend (Google Apps Script)

1. Go to [script.google.com](https://script.google.com)
2. Create **New Project**
3. Paste `backend.gs` code
4. Click **Deploy** → **New Deployment** → **Web App**
5. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy** and copy the **Web App URL**

### Step 2: Configure Script Properties

In Google Apps Script:
1. Click **Project Settings** (⚙️ icon)
2. Scroll to **Script Properties**
3. Add these properties:

| Property | Value | How to Get |
|----------|-------|------------|
| `GEMINI_API_KEY` | Your API key | [Get free key](https://aistudio.google.com/app/apikey) |
| `SHEET_ID` | Your Google Sheet ID | From sheet URL |
| `DISCORD_REST` | Webhook URL | [Create webhook](https://support.discord.com/hc/en-us/articles/228383668) |
| `DISCORD_HK` | Webhook URL | (Optional) |
| `DISCORD_MAIN` | Webhook URL | (Optional) |
| `DISCORD_RESV` | Webhook URL | (Optional) |
| `DISCORD_EMER` | Webhook URL | (Recommended) |
| `WEATHER_API_KEY` | API key | [Free key](https://openweathermap.org/api) (Optional) |

### Step 3: Create Google Sheet

1. Create new Google Sheet
2. Copy the Sheet ID from URL (between `/d/` and `/edit`)
3. Create these tabs:
   - `RESTAURANT RESERVATIONS`
   - `HOUSEKEEPING`
   - `MAINTENANCE`
   - `HOTEL RESERVATIONS`
   - `CHAT LOG`
   - `INFO` (optional - for extra knowledge base)

### Step 4: Update Frontend Files

In `config.js`, update:
```javascript
system: {
  backend: {
    scriptUrl: "YOUR_WEB_APP_URL_HERE"
  }
}
```

In `index.html` and `dashboard.html`, replace the `API_URL`:
```javascript
const API_URL = "YOUR_WEB_APP_URL_HERE";
```

### Step 5: Deploy to GitHub Pages

1. Push all files to GitHub repo
2. Go to **Settings** → **Pages**
3. Source: **Deploy from branch** → `main`
4. Your site will be live at: `https://username.github.io/repo-name/`

---

## 🎨 Customization (White-Label Ready)

### Quick Rebrand for New Hotel

Edit `config.js` only:

```javascript
branding: {
  name: "Your Hotel Name",
  tagline: "Your Tagline",
  location: "Your Address",
  phone: "+27 XX XXX XXXX",
  email: "info@yourhotel.com",
  logo: "./your-logo.png"
},

theme: {
  primaryColor: "#YOUR_COLOR",
  accentColor: "#YOUR_ACCENT"
}
```

That's it! No HTML/CSS editing needed.

---

## 📊 Features

### Guest Chat Interface
- ✅ Multilingual AI (18 languages)
- ✅ Voice input/output
- ✅ Quick action buttons
- ✅ Emergency alert system
- ✅ PWA-ready (works offline)

### Manager Dashboard
- ✅ Real-time ticket management
- ✅ Status updates (Open → In Progress → Completed)
- ✅ Analytics & reporting
- ✅ System health monitoring
- ✅ Filter by status

### Backend Intelligence
- ✅ Smart action detection
- ✅ Auto-ticket creation
- ✅ Discord notifications
- ✅ Conversation memory (sliding window)
- ✅ Response validation
- ✅ Error recovery

---

## 🔧 Troubleshooting

### "Connection Error"
- Check `API_URL` is correct in HTML files
- Verify web app is deployed as "Anyone can access"
- Check CORS settings in Google Apps Script

### "Gemini Not Responding"
- Verify `GEMINI_API_KEY` in Script Properties
- Check API quota at [Google AI Studio](https://aistudio.google.com)

### "No Notifications"
- Verify Discord webhook URLs in Script Properties
- Test webhook with: `curl -X POST -H "Content-Type: application/json" -d '{"content":"test"}' YOUR_WEBHOOK_URL`

### "Status Updates Not Working"
- Ensure sheet tabs have correct names (case-sensitive)
- Check status column indexes in `getStatusCol()` function

---

## 📱 Progressive Web App (PWA)

To make the chat installable:

1. Create `manifest.json`:
```json
{
  "name": "Orion Hotel Concierge",
  "short_name": "Orion",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a365d",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "./orion-hotel-logo.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. Create `sw.js` (service worker):
```javascript
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('orion-v1').then(cache => 
      cache.addAll(['/', './index.html', './config.js'])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => 
      response || fetch(e.request)
    )
  );
});
```

---

## 💰 Pricing Tiers (Example)

**Starter** - R999/month
- Up to 500 conversations
- Basic analytics
- Email support

**Professional** - R2,499/month
- Unlimited conversations
- Advanced analytics
- WhatsApp integration
- Priority support

**Enterprise** - Custom
- Multi-property support
- Custom integrations
- Dedicated account manager

---

## 🆘 Support

**Demo Issues:** graham@yourcompany.com  
**Emergency:** +27 724 971 810

---

## 📄 License

White-label version available for hotel partners. Contact for licensing.

---

## 🔮 Roadmap

- [ ] WhatsApp Business API integration
- [ ] Email notifications fallback
- [ ] Multi-property dashboard
- [ ] Guest satisfaction surveys
- [ ] Advanced ML insights
- [ ] Mobile app (React Native)

---

**Built with ❤️ by Graham + Claude (Anthropic)**  
Powered by Google Gemini 2.0 Flash🏨 ZAR Hotel Digital Concierge SystemA "Headless" AI Concierge that connects a custom web interface to a Google Apps Script backend, using Gemini AI for intelligence and Google Sheets as a database.Current Version: v4.0 (Production Core)Live Demo: Click HereManager Dashboard: Click Here⚡ Features🧠 AI IntelligencePowered by Gemini 2.0 Flash: Context-aware responses based on a custom knowledge base.Multi-Language Support: Automatically detects and speaks 14 languages (English, Zulu, Xhosa, Afrikaans, French, German, Spanish, etc.).Voice Interaction: Native Speech-to-Text and Text-to-Speech (South African/British accent profiles).🏨 Hotel Management OperationsDepartment Routing: Automatically detects intent and routes alerts to specific departments.No-Code Database: All hotel info is managed via a Google Sheet (INFO tab).Live Dashboard: A real-time HTML dashboard for owners to view logs and requests.🔔 IntegrationsDiscord: Instant notifications to specific channels (Housekeeping, Maintenance, Reservations).Google Sheets: Logs every interaction, request, and booking lead.OpenWeatherMap: Provides real-time weather updates to guests.🛠️ ArchitectureThe system uses a Headless Architecture:Frontend (The Face): Static HTML/CSS/JS files hosted on GitHub Pages.Backend (The Brain): Google Apps Script acting as an API.Database (The Memory): Google Sheets (Stores Info, Logs, and Reservations).Notifications (The Nervous System): Discord Webhooks.📂 Repository Structure/
├── index.html        # The Guest-facing Chat Application
├── dashboard.html    # The Staff/Manager Dashboard
├── readme.md         # This file
├── setup_guide.md    # Detailed installation instructions
└── devlog.md         # Development history
🚀 Quick StartChat: Open index.html to start a conversation with the concierge.Dashboard: Open dashboard.html to view live data streaming from the Google Sheet.backend: All logic resides in Code.gs on Google Apps Script.🛡️ Privacy & SecurityNo Payment Processing: The bot is strictly instructed never to handle credit card data.Hallucination Control: Strict prompts ensure the bot only answers from the provided Knowledge Base.Department Isolation: Housekeeping alerts go to Housekeeping; they do not see Reservations data.
