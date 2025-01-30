# 📊 Google Sheets to GA4 Tracker

This **Google Apps Script** logs **Google Sheets opens** to **Google Analytics 4 (GA4)** using the Measurement Protocol. It tracks:
- **Spreadsheet Name** (`spreadsheet_name`)
- **Active Sheet (Tab) Name** (`sheet_name`)
- **Custom GA4 Event Name** (e.g., `"trade_price_list_opened"`)
- **Page Title** (`page_title`)
- **Screen Name** (`screen_name`)

---

## 🚀 Features
✔️ Automatically tracks Google Sheets opens  
✔️ Sends **spreadsheet name** and **active sheet name** to GA4  
✔️ Uses **GA4 Measurement Protocol** for event tracking  
✔️ Works with **GA4 DebugView** and standard reports  

---

## 📌 Setup Instructions

### **1️⃣ Enable Google Apps Script**
1. Open **Google Sheets**.
2. Click **Extensions > Apps Script**.
3. Delete any existing code and **paste** the provided script.

---

### **2️⃣ Get Your GA4 Measurement ID and API Secret**
1. Open **[Google Analytics](https://analytics.google.com/analytics/web/)**.
2. Navigate to **Admin > Data Streams**.
3. Copy the **Measurement ID** (Format: `G-XXXXXXXXXX`).
4. Click **Measurement Protocol API Secret** (under your Data Stream).
5. **Generate a new API Secret** (if not created) and copy it.

---

### **3️⃣ Configure the Script**
1. Open **Google Apps Script** (`Extensions > Apps Script`).
2. Replace the placeholders in the script:
   ```javascript
   var measurementId = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID
   var apiSecret = "YOUR_API_SECRET"; // Replace with your GA4 API Secret
