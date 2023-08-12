//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var allergies = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"]
  
  var myAllergies = [];
  var isAlergic = new Boolean(false);
  var binScore = "";

  function convertToBin(score) {
    var binScore = (score >>> 0).toString(2)
    return binScore;
  }
  
  for (var i = 0; i < convertToBin(binScore).length(); i++) {
    if ( convertToBin(binScore).charAt(i) === 1){
      isAlergic = true;
    }
    else {
      isAlergic = false;
    }
  
    switch (convertToBin(binScore).charAt(i) = 1) {
      case 0:
        myAllergies.push("eggs");
        break;
      
      case 1:
        myAllergies.push("peanuts");
        break;
      
      case 2:
        myAllergies.push("shellfish");
        break;
    
      case 3:
        myAllergies.push("strawberries");
        break;
  
      case 4:
        myAllergies.push("tomatoes");
        break;
      
      case 5:
        myAllergies.push("chocolate");
        break;
    
      case 6:
        myAllergies.push("pollen");
        break;
      default:
  
        break;
    }
  }
  
  if(isAlergic = true){
    console.log("Usuário possui alguma alergia.")
  }
    
  export class Allergies {
    constructor(score) {
      this.score = score;
    }
  
    list() {
      throw new Error('Remove this statement and implement this function');
    }
  
    allergicTo() {
      this.allergicTo = () => myAllergies;
    }
  }
  
  
// export class Allergies {
//   constructor(score) {
//     this.score = score;
//   }

//   list() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   allergicTo(item) {
//     //if(this.score....)
//     if (item === 'eggs') return (false);
//   }
// }