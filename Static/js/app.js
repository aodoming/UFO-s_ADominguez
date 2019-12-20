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
// Add filters
// Add function that will filter the table
function handleClick() {
    //Add variables to hold our date data, both filtered and unfiltered
    let date = d3.select("#datetime").property("value");
    // Set a default filter and save the raw data to a new variable
    let filteredData = tableData;
    //Add if statment to filter and return data by date entered by user, otherwise return default data
    // Code is applying a filter to data based on a date value entered by user.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.. call the buildTable function so that only the data that matches the filter is displayed.
    buildTable(filteredData);
};
d3.select("#filter-btn").on("click", handleClick)
// Users will need to see the original table to even begin to use the filter we’ve set up
// Call the buildTable function using the original data that was imported
buildTable(tableData);


//                                     Challenge Here                                          //
// This function will replace your handleClick function
function updateFilters() {
    // Save the element, value, and id of the filter that was changed
    //Add variables to hold our date data, both filtered and unfiltered
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#cityLoc").property("value");
    let state = d3.select("#stateLoc").property("value");
    let country = d3.select("#countryLoc").property("value");
    let shape = d3.select("#shapeType").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };
    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };
    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    };
    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };
    buildTable(filteredData);
}
// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);