function logSheetOpenToGA4() {
  var measurementId = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID
  var apiSecret = "YOUR_API_SECRET"; // Replace with your GA4 API Secret

  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var spreadsheetName = sheet.getName(); // Get Google Sheets document name
  var activeSheetName = sheet.getActiveSheet().getName(); // Get active worksheet (tab) name

  var url = "https://www.google-analytics.com/mp/collect?measurement_id=" + measurementId + "&api_secret=" + apiSecret;

  var payload = {
    client_id: Utilities.getUuid(), // Unique session identifier
    events: [{
      name: "YOUR_CUSTOME_EVENT_NAME", // Custom event name
      params: {
        spreadsheet_name: spreadsheetName, // Full Google Sheets document name
        sheet_name: activeSheetName, // Individual worksheet (tab) opened
        page_title: spreadsheetName, // Set page_title as the spreadsheet name
        screen_name: activeSheetName, // Set screen_name as the active sheet/tab
        timestamp: new Date().toISOString(),
        engagement_time_msec: "100"
      }
    }]
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  try {
    UrlFetchApp.fetch(url, options); // Send data to GA4
  } catch (e) {
    Logger.log("Error: " + e.message);
  }
}

// Trigger function on spreadsheet open
function onOpen() {
  logSheetOpenToGA4();
}
