// STEP 2 - use dateform to filter searches 
// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// Select the submit button
var submit = d3.select("#submit");
    submit.on("click", function() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Filter Data
    var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);
    console.log(filteredData);
 
    // Loop Through `data` and console.log each alien report object
    filteredData.forEach(function(alienReport) {
    console.log(alienReport);
    });
  
    // use d3 to append one table row `tr` for each alien report object
    filteredData.forEach(function(alienReport) {var row = tbody.append("tr");
    });
  
    // use `Object.entries` to console.log each alien report value
    filteredData.forEach(function(alienReport) {var row = tbody.append("tr");
        Object.entries(alienReport).forEach(function([key, value]) {
        console.log(key, value);
        });
    });
  
    // use d3 to append 1 cell per alien report value (datetime, city, state, country, shape, duration)
    filteredData.forEach(function(alienReport) {var row = tbody.append("tr");
        Object.entries(alienReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the alien report object
        var cell = tbody.append("td");
        });
    });
});