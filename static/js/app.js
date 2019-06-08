// from data.js
var tableData = data;

// YOUR CODE HERE!
var filter = d3.select("#filter-btn");
var filter2 = d3.select("#filter-btn-all");

filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
// Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputDate.property("value");
  var inputValueCity = inputCity.property("value");
  var inputValueState = inputState.property("value");
  var inputValueCountry = inputCountry.property("value");
  var inputValueShape = inputShape.property("value");

//Test previous process
  console.log(inputValueDate);
  console.log(inputValueCity);
  console.log(inputValueState);
  console.log(inputValueCountry);
  console.log(inputValueShape);

  //Create filters

  filteredData = tableData.filter(function(ufo) {
   return (ufo.datetime===inputValueDate || inputValueDate === "") &&
   (ufo.city === inputValueCity || inputValueCity === "") &&
    (ufo.state=== inputValueState || inputValueState === "") && 
    (ufo.country=== inputValueCountry || inputValueCountry === "") &&
    (ufo.shape=== inputValueShape || inputValueShape === "")
  });

  console.log(filteredData[0]);
  console.log(filteredData.length);

  var tbody = d3.select("tbody");

  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  filteredData.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
});


filter2.on("click", function() {
  document.getElementById("newForm").reset();
  
});