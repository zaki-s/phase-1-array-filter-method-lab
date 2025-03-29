// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example usage
  const drivers = [
    "Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"
  ];
  
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Chicago" },
    { name: "Annette", hometown: "Houston" }
  ];
  
  console.log(findMatching(drivers, "Bobby")); // ["Bobby", "bobby"]
  console.log(fuzzyMatch(drivers, "Sa")); // ["Sammy", "Sally"]
  console.log(matchName(driverObjects, "Sally")); // [{ name: "Sally", hometown: "Chicago" }]

  