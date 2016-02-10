//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {
  var quiet =function(input)  {
    return /^\s*$/.test(input);
  };

  var isShouting = function (input){
    return input.toUpperCase() === input && input.toLowerCase()!== input;
  };
  var isQuestion = function (input) {
    return input[input.length-1] === "?";
  }

this.hey = function(input){
    if (quiet(input)) {
      return 'Fine. Be that way!';
      }

    else if (isShouting(input)) {
      return "Whoa, chill out!";
    }

    else if (isQuestion(input)) {
      return "Sure.";
    }
    else {
      return 'Whatever.';
    }

  };

};

// var Bob = function() {
//   var isSilentTreatment = function(input) {
//     return /^\s*$/.test(input);
//   };

//   var isShouting = function(input) {
//     return input.toUpperCase() === input && input.toLowerCase() !== input;
//   };

//   var isQuestion = function(input) {
//     return input.charAt(input.length - 1) === '?';
//   };

//   this.hey = function(input) {
//     if (isSilentTreatment(input)) {
//       return 'Fine. Be that way!';
//     }

//     if (isShouting(input)) {
//       return 'Whoa, chill out!';
//     }

//     if (isQuestion(input)) {
//       return 'Sure.';
//     }

//     return 'Whatever.';
//   };
// };



//SHOUTING
//input === input.toUpperCase;
//QUESTION
//indexOf('?')
//Number == typeof parseInt.input


module.exports = Bob;
