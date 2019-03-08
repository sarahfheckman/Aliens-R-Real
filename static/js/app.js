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
