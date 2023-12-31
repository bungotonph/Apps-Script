// This script is powered by Bard, a large language model from Google AI.
// The project was created by SBAJO.

function applyConditionalFormatting() {
  var sheetName = "Consolas"; // Specify the name of the sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName); // Get the reference to the "Consolas" sheet
  var countRange = sheet.getRange("A5:A" + sheet.getLastRow()); // Get the range from cell A5 to the last non-empty row in column A
  var countValues = countRange.getValues(); // Get the values in the specified range

  // Remove all existing formatting, including borders
  countRange.clearFormat();

  // Arrays to store font colors, font weights, font styles and backgrounds for conditional formatting
  var fontColors = [];
  var fontWeights = [];
  var fontStyles = [];

  // Loop through each value in the range to determine formatting options
  for (var i = 0; i < countValues.length; i++) {
    var count = countValues[i][0];

    // Check if the value in the cell is greater than 5000
    if (count > 5000) {
      fontColors.push(["red"]); // Add "red" font color to the fontColors array
      fontWeights.push(["bold"]); // Add "bold" font weight to the fontWeights array
      fontStyles.push(["normal"]); // Add "normal" font style to the fontStyles array
    }
    
    /** FOR NEGATIVE VALUES **/
    //else if (count < 0) {
    //  fontColors.push(["red"]); // Add "blue" font color to the fontColors array for negative values
    //  fontWeights.push(["italic"]); // Add "normal" font weight to the fontWeights array for negative values
    //  fontStyles.push(["normal"]); // Add "normal" font style to the fontStyles array for negative values
    //} 
    
    else {
      fontColors.push(["black"]); // Add "black" font color to the fontColors array
      fontWeights.push(["normal"]); // Add "normal" font weight to the fontWeights array
      fontStyles.push(["normal"]); // Add "normal" font style to the fontStyles array
    }
  }

  // Apply the calculated formatting options to the range of cells
  countRange.setFontColors(fontColors); // Set font colors for the range based on the fontColors array
  countRange.setFontWeights(fontWeights); // Set font weights for the range based on the fontWeights array
  countRange.setFontStyles(fontStyles); // Set font styles for the range based on the fontStyles array  
  countRange.setHorizontalAlignment("center"); // Center-align the content in the cells
  countRange.setFontFamily("Consolas"); // Set the font family to "Consolas"
  countRange.setFontSize(9); // Set the font size to 9 points
}
