// Google Apps Script — Cinema4 Users Backend
// Deploy as Web App: Execute as "Me", Who has access: "Anyone"

const SHEET_NAME = 'Sheet1'; // שם הגיליון

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const rows = sheet.getDataRange().getValues().slice(1); // skip header
    const users = rows
      .filter(r => r[0])
      .map(r => ({
        username: r[0],
        updated: r[1],
        lessons: JSON.parse(r[2] || '{}')
      }));
    return json({ users });
  } catch(e) {
    return json({ error: e.message });
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const rows = sheet.getDataRange().getValues();

    if (body.action === 'saveUser') {
      const username = body.username;
      const lessons = JSON.stringify(body.lessons || {});
      const now = new Date().toISOString();
      // find existing row (skip header row at index 0)
      const idx = rows.slice(1).findIndex(r => r[0] === username);
      if (idx === -1) {
        sheet.appendRow([username, now, lessons]);
      } else {
        const rowNum = idx + 2; // 1-indexed + skip header
        sheet.getRange(rowNum, 2).setValue(now);
        sheet.getRange(rowNum, 3).setValue(lessons);
      }
      return json({ ok: true });
    }

    return json({ error: 'unknown action' });
  } catch(e) {
    return json({ error: e.message });
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
