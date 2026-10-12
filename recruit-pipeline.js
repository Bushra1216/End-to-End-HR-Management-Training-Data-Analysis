function onEdit(e) {
  const range = e.range;
  const sheet = range.getSheet();
  const sheetName = sheet.getName();
  
  const statusColumnNum = 7; // Column D (Email = 1, Name = 2, Department = 3, Status = 4 Email Address | Name Department | Status(this one I added extra)
  const headerRows = 1;   // Number of header rows to ignore
  
  // List of sheets involved in workbook
  const validSheets = ["Form Responses 1", "Hired", "Wait4Decision", "Active", "Restricted", "Refused", "Fired", "Exceptional Case"];

  // Check if the edit happened in the correct column and a valid sheet
  if (!validSheets.includes(sheetName)) return;
  if (range.getColumn() !== statusColumnNum) return;
  if (range.getRow() <= headerRows) return;

  //Get selected status value
  const statusValue = range.getValue().trim();
  if (!statusValue) return;

  // Check the destination sheet exists. If it matches the current sheet, do nothing.
  if (statusValue === sheetName) return;
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let targetSheet = ss.getSheetByName(statusValue);
  
  // If the destination sheet doesn't exist yet, create it automatically
  /*if (!targetSheet) {
    targetSheet = ss.insertSheet(statusValue);
    // Copy the headers from the source sheet to the new sheet
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    targetSheet.getRange(1, 1, 1, sheet.getLastColumn()).setValues(headers);
  }*/

//If the sheet doesn't exist (due to a typo or mismatch), stop the script safely
  if (!targetSheet) {
    SpreadsheetApp.getUi().alert("Error: The sheet tab named '" + statusValue + "' was not found. Please check your sheet names.");
    return;
  }

  // move data
  const rowNum = range.getRow();
  const lastColumn = sheet.getLastColumn();
  const rowData = sheet.getRange(rowNum, 1, 1, lastColumn).getValues()[0];



  for (let i = 0; i < rowData.length; i++) {
    let cellValue = String(rowData[i]).trim();
    if (cellValue.startsWith("+")) {
      rowData[i] = "'" + cellValue; // add hidden apostrophe to force text mode
    }
  }


  // Append the row to the target sheet
  targetSheet.appendRow(rowData);

  // delete row data from the source sheet
  sheet.deleteRow(rowNum);
}



//https://docs.google.com/forms/d/e/1FAIpQLSfG2cEF5wi3I3ug1bsZPYzXOAod6A87P4JmM5H_gRICM5hEMA/viewform?usp=header -- form 
// recruitment_tracker -- https://docs.google.com/spreadsheets/d/1enTkOx70_7lrnIZMR-cCDOZ_7HoslbhM9C-MNFTJWwk/edit?usp=sharing
// data_entry automated https://docs.google.com/spreadsheets/d/1EcJSw-80cApummgxvMMaKCWzrfxSQ0NFgYlUZikfPc8/edit?usp=sharing
