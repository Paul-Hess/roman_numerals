describe("getResultForOnes", function() {
  it("It should replace an input number between 1 & 8 with the roman numeral equivalant.", function() {
    expect(getResultForOnes(3)).to.equal("III");
  });

   it("It should replace an input number between 1 & 8 with the roman numeral equivalant.", function() {
     expect(getResultForOnes(8)).to.equal("VIII");
   });

   it("It should replace an input number between 1 & 8 with the roman numeral equivalant.", function() {
     expect(getResultForOnes(4)).to.equal("IV");
   });

   it("It should replace an input number between 1 & 8 with the roman numeral equivalant.", function() {
     expect(getResultForOnes(9)).to.equal("IX");
   });
});

describe("getResultForTens", function() {
  it("It should replace an input number between 1 & 8 with the roman numeral equivalant.", function() {
    expect(getResultForOnes(3)).to.equal("III");
  });

   it("It should replace an input number between 9 & 99 with the roman numeral equivalant.", function() {
     expect(getResultForTens(6)).to.equal("LX");
   });

   it("It should replace an input number between 9 & 99 with the roman numeral equivalant.", function() {
     expect(getResultForTens(4)).to.equal("XL");
   });

   it("It should replace an input number between 9 & 99 with the roman numeral equivalant.", function() {
     expect(getResultForTens(9)).to.equal("XC");
   });
});

describe("getResultForHundreds", function() {
  it("It should replace an input number between 100 and 1000 with the roman numeral equivalant.", function() {
    expect(getResultForHundreds(3)).to.equal("CCC");
  });

  it("It should replace an input number between 100 and 1000 with the roman numeral equivalant.", function() {
    expect(getResultForHundreds(4)).to.equal("CD");
  });

  it("It should replace an input number between 100 and 1000 with the roman numeral equivalant.", function() {
    expect(getResultForHundreds(9)).to.equal("CM");
  });

  it("It should replace an input number between 100 and 1000 with the roman numeral equivalant.", function() {
    expect(getResultForHundreds(5)).to.equal("D");
  });
});

describe("getResultForThousands", function() {
  it("It should replace an input number between 100 and 1000 with the roman numeral equivalant.", function() {
    expect(getResultForThousands(3)).to.equal("MMM");
  });
});

describe ("romanNumeral", function() {
  it("It should replace any number below and including 3999 to a Roman Numeral.", function() {
    expect(romanNumeral(28)).to.equal("XXVIII");
  });
});
