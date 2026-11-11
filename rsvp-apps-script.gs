// RSVP -> Google Sheet  (Patrick & Stefy)  — v2
// If you opened this from the sheet (Extensions > Apps Script), leave SHEET_ID empty.
// If the script is standalone, put the sheet's ID here (the long text between /d/ and /edit in its URL).
const SHEET_ID = '';
const SHEET_NAME = 'RSVP';

function doPost(e) {
  try {
    const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(['Time', 'Name', 'Attending', 'Guests', 'Message']);
    const p = (e && e.parameter) || {};
    sh.appendRow([new Date(), p.name || '', p.attending || '', p.guests || '', p.message || '']);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  }
}

function doGet() { return ContentService.createTextOutput('RSVP endpoint is live'); }
