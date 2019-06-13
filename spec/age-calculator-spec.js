import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', () => {
  it('should test whether birthday is converted to earth years', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    console.log(ageCalculator);
    // let earthAge = ageCalculator.earthAge;
    expect(ageCalculator.getAge("Earth")).toEqual(32);
  });

  it('should test whether correct age on Mercury is returned', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let mercuryAge = ageCalculator.getAge("Mercury");
    expect(mercuryAge).toEqual(133);
  });

  it('should test whether the right age on any planet is returned', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let ageOnVenus = ageCalculator.getAge("Venus");
    expect(ageOnVenus).toEqual(51);
  });


  //remaining years on earth

  //remaining years on any planet

  //you should have died xx years ago
});
