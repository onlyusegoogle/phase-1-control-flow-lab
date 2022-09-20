function scuberGreetingForFeet(tripDistance) {
  if (tripDistance <= 200) {
    return "This one is on me!"
  } else if (tripDistance > 400 && tripDistance < 2000) {
      return "That will be twenty bucks."
  } else if (tripDistance > 2000 && tripDistance < 2500){
      return "I will gladly take your thirty bucks."
  } else if (tripDistance > 2500){
      return "No can do."
  }
}
/*
function ternaryCheckCity(city) {
  if (city === "NYC"){
    return "Ok, sounds good."
  } else{
    return "No go."
  }
}
*/

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go." 
}


function switchOnCharmFromTip(tip) {
  let result
  switch(tip){
    case "generous": return "Thank you so much."
    case "not as generous": return "Thank you."
    default: return  "Bye."
  } 
}


