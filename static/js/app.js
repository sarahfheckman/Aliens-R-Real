// from data.js
var tableData = data;

// STEP 1 - create table 
// use d3 select insert data into table 
var tbody = d3.select("tbody");
  
  // use d3 to append one table row `tr` for each alien report object
  data.forEach(function(alienReport) {var row = tbody.append("tr");
  });
  
  // use `Object.entries` to console.log each alien report value
  data.forEach(function(alienReport) {var row = tbody.append("tr");
      Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
    });
  });
  
  // use d3 to append 1 cell per alien report value (datetime, city, state, country, shape, duration)
  data.forEach(function(alienReport) {var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the alien report object
      var cell = tbody.append("td");
    });
  });
  
  // use d3 to update each cell's text with
  // alien report values
  data.forEach(function(alienReport) {var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {

      // Append a cell to the row for each value
      // in the alien report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });



// STEP 2 - use dateform to filter searches 

// Select the submit button
var submit = d3.select("#submit");
    submit.on("click", function() {
    
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue)
  
    // Filter Data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    // create a blank array for the filtered data
    var ufoFiltered = [];
    // iterate through
    filteredData.forEach((data) => {
    //iterate through each key & value
    Object.entries(data).forEach(([key, value]) => {
      //use the key to determine which array to push the value to 
        ufoFiltered.push(key, value);

        // Use D3 to select the table body
        var tbody = d3.select("tbody");

        // Append one table row per sighting
        var row = tbody.append("tr");

        // append one cell for the student and one cell for the grade
        row.append("td").text(datetime);
        row.append("td").text(city);
        row.append("td").text(state);
        row.append("td").text(country);
        row.append("td").text(shape);
        row.append("td").text(durationMinutes);
        row.append("td").text(comments);
        });
    });
});
