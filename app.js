// from data.js
var tableData = data;

// add table data

data.forEach(function(ufoSighting) {
    //console.log(ufoSighting);
    var tbody = d3.select("tbody"); 
    var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
      });
    });


/////////date search & filter///////////
// get connection to input field

var filterButton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

// when button is clicked, capture form input
// function search= terms are to have input date and table date match
filterButton.on("click", function() {
    var inputDate = inputField.property("value");
    //console.log("The date selected was: ");
    //console.log(inputDate);
    var filteredData = data.filter(sighting => sighting.datetime === inputDate);
    console.log(filteredData);
        d3.select("tbody").selectAll("tr").remove();
        filteredData.forEach(function(dateSighting) {
            var tbody = d3.select("tbody"); 
            var row = tbody.append("tr");
            Object.entries(dateSighting).forEach(function([key, value]) {
                //console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
             });
        });
});


