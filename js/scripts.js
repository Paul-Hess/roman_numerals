var fiver = "V";
var ones = "III";
var tenner = "XXX";
var fifties = "L";
var Cnote = "CCC";
var fiveHun = "D";
var thousand = "MMM";
function getResultForOnes(num) {
  if (num < 4) {
    return ones.slice(0, num);
} else if (num < 5) {
    return ones.slice(0, 1) + fiver;
} else if (num === 5) {
    return fiver;
} else if (num < 9) {
    var cutAt = num - 5;
    return fiver + ones.slice(0, cutAt);
} else {
  return "IX";
}
}

function getResultForTens(num) {
  if (num < 4) {
    return tenner.slice(0, num);
} else if (num < 5) {
    return tenner.slice(0, 1) + fifties;
} else if (num === 5) {
    return fifties;
} else if (num < 9) {
    var cutAt = num - 5;
    return fifties + tenner.slice(0, cutAt);
} else {
  return "XC";
}
}

function getResultForHundreds(num) {
  if (num < 4) {
    return Cnote.slice(0, num);
} else if (num < 5) {
    return Cnote.slice(0, 1) + fiveHun;
} else if (num === 5) {
    return fiveHun;
} else if (num < 9) {
    var cutAt = num - 5;
    return fiveHun + Cnote.slice(0, cutAt);
} else {
  return "CM";
}
}

function getResultForThousands(num) {
    return thousand.slice(0, num);
}

function romanNumeral(num) {
  var numstring = num.toString();
  if (numstring[3]) {
    return getResultForThousands(numstring[0]) + getResultForHundreds(numstring[1]) +  getResultForTens(numstring[2]) +  getResultForOnes(numstring[3]);
  } else if (numstring[2] ) {
    return getResultForHundreds(numstring[0]) +  getResultForTens(numstring[1]) +  getResultForOnes(numstring[2]);
  } else if (numstring[1]) {
    return getResultForTens(numstring[0]) +  getResultForOnes(numstring[1]);
  } else {
    return getResultForOnes(numstring[0]);
  }
}


$(document).ready(function() {
  $('form#forma').submit(function(event) {

    var numToRom = $('input#number').val();
    var convert = romanNumeral(numToRom);
    $('div.jumbotron').toggle();
    $('div.output').toggle();
    $('span.numberchange').text(convert);

  event.preventDefault();
});
});
