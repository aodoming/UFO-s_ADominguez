// import data from the data.js file. 
// And declare a variable,tableData, using const.
const tableData = data;

//reference the html table using D3 (ie. a js library)
var tbody = d3.select("tbody");

//Creating a new function buildTable, with "data" as the argument/parameter
// Note: the variable "data" was used above to import data array from js file
function buildTable(data) {
    //First create a blank canvas, by clearing out any existingd data. This is a standard way to clear data.
    tbody.html("");
    // Add a ForEach function to loop thru each obj in data (use an arrow function). Argument "dataRow" rep each row data as we iterate thru
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Create a variable that will append a row to the table body.
        let row = tbody.append("tr");
        // Create another function to loop through each field in the dataRow argument. These fields will become table data/cell
        // Line code below says: Js ref one object in the data array and put values in the dataRow argument
        // while this forEach((val) specifies that we want one object per row.
        Object.values(dataRow).forEach((val) => {
            // Append each value of the object to a cell in the table data tag <td>
            let cell = row.append("td")
            //Extract & Add only the text values
            cell.text(val);
        }
        );
    });
}



