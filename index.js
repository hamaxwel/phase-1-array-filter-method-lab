// Function 1: findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  // Function 3: matchName
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName }; // Exporting for testing
  