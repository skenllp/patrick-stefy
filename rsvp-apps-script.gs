// RSVP -> Google Sheet  (Patrick & Stefy)
// Paste into the Google Sheet: Extensions > Apps Script. Then Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone) and copy the Web app URL.
const SHEET_NAME = 'RSVP';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(['Time', 'Name', 'Attending', 'Guests', 'Message']);
  const p = e.parameter || {};
  sh.appendRow([new Date(), p.name || '', p.attending || '', p.guests || '', p.message || '']);
  return ContentService.createTextOutput('ok');
}

function doGet() { return ContentService.createTextOutput('RSVP endpoint is live'); }
