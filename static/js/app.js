// from data.js
var tableData = data;

// create empty arrays for the keys 
var datetimes = [];
var cities = [];
var states = [];
var countries = [];
var shapes = [];
var duration = [];
var comments = [];

// iterate 
data.forEach((data) => {
    // iterate through each key and value
    Object.entries(data).forEach(([key, value]) => {
        // use key to determine which array to push the value to
        if (key === "datetime") {
            datetimes.push(value);
        }
        else if (key === "city") {
            cities.push(value);
        }
        else if (key === "state") {
            states.push(value);
        }
        else if (key === "country") {
            countries.push(value);
        }
        else if (key === "shape") {
            shapes.push(value);
        }
        else if (key === "duration") {
            duration.push(value);
        }
        else {
            comments.push(value);
        }
    })

});

// use d3 select insert data into table 
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each alien report object
data.forEach(function(alienReport) {
    console.log(alienReport);
  });
  
  // Step 2:  Use d3 to append one table row `tr` for each alien report object
  data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
  });
  
  // Step 3:  Use `Object.entries` to console.log each alien report value
  data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
  
    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
    });
  });
  
  // Step 4: Use d3 to append 1 cell per alien report value (datetime, city, state, country, shape, duration)
  data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
  
    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the alien report object
      var cell = tbody.append("td");
    });
  });
  
  // Step 5: Use d3 to update each cell's text with
  // alien report values
  data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the alien report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });