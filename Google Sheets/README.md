# Google Sheets to GA4 Tracker 📊

This Google Apps Script logs Google Sheets opens to Google Analytics 4 (GA4) using the Measurement Protocol. It tracks:
- **Spreadsheet Name** (`page_title`)
- **Active Sheet (Tab) Name** (`screen_name`)
- **Custom GA4 Event Name** (e.g., `"trade_price_list_opened"`)

## Features
✔️ Tracks Google Sheets opens automatically  
✔️ Sends **spreadsheet name** and **active sheet name** to GA4  
✔️ Uses GA4 Measurement Protocol for event tracking  
✔️ Works with GA4 DebugView and Reports  

---

## 📌 Setup Instructions

### **1️⃣ Enable Google Apps Script**
1. Open **Google Sheets**.
2. Click on **Extensions > Apps Script**.
3. Delete any existing code and **paste** the provided script.

---

### **2️ Get Your GA4 Measurement ID and API Secret**
1. Go to **Google Analytics > Admin > Data Streams**.
2. Copy the **Measurement ID** (Format: `G-XXXXXXXXXX`).
3. Click **Measurement Protocol API Secret** (under your Data Stream).
4. **Generate a new API Secret** (if not created) and copy it.

---

### **3️⃣ Configure the Script**
1. Replace:
   ```javascript
   var measurementId = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID
   var apiSecret = "YOUR_API_SECRET"; // Replace with your GA4 API Secret

2. Change the custom event name if needed:
javascript
name: "YOUR_CUSTOM_EVENT_NAME"

3. Set Up the Trigger
In Google Apps Script, click the Clock (Triggers) Icon.
Click + Add Trigger.
Set:
- Function: onOpen
- Event Source: From Spreadsheet
- Event Type: On Open
Click Save.


4. Viewing Data in GA4
Go to GA4 > Reports > Realtime > Events.
Look for YOUR_CUSTOM_EVENT_NAME.
Click on it to see:
- spreadsheet_name
- sheet_name
- page_title
- screen_name
For live debugging, go to GA4 > Admin > DebugView.

5. Customization
You can rename YOUR_CUSTOM_EVENT_NAME to any meaningful event name, e.g.:
name: "trade_price_list_opened"
If tracking multiple spreadsheets, you can modify the script to track different Google Sheets by adjusting the spreadsheet_name parameter.

Troubleshooting
Not seeing data in GA4?

Check if the Measurement ID and API Secret are correct.
Ensure DebugView is enabled in GA4.
Make sure you have registered page_title and screen_name in GA4 > Admin > Custom Definitions.
Data delay?

GA4 can take up to 24 hours for standard reports.
Realtime tracking should work immediately.

📜 License
This project is open-source and available under the MIT License.

