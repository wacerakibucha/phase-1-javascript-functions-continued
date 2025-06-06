// Function to describe a fun Saturday activity
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function displaySaturdayFun() {
  const simulatedInput = "go hiking"; 
  const activity = simulatedInput.trim();

  let result;
  if (activity === "") {
    result = saturdayFun(); 
  } else {
    result = saturdayFun(activity); 
  }
  console.log("Saturday Fun Output:", result); 
}

// Function to describe a Monday work activity
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function displayMondayWork() {
  const simulatedInput = ""; 
  const activity = simulatedInput.trim();

  let result;
  if (activity === "") {
    result = mondayWork(); 
  } else {
    result = mondayWork(activity); 
  }
  console.log("Monday Work Output:", result); 
}

// Function that returns another function to wrap an adjective in flair
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

function displayWrapAdjective() {
  const simulatedFlairInput = "!!!"; 
  const simulatedAdjectiveInput = "amazing"; 

  const flair = simulatedFlairInput.trim();
  const adjective = simulatedAdjectiveInput.trim();

  let outerFunction;
  if (flair === "") {
    outerFunction = wrapAdjective(); 
  } else {
    outerFunction = wrapAdjective(flair); 
  }

  let result;
  if (adjective === "") {
    result = outerFunction(); 
  } else {
    result = outerFunction(adjective); 
  }

  console.log("Wrapped Adjective Output:", result); 
}







