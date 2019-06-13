import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', () => {
  it('should test whether birthday is converted to earth years', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let earthAge = ageCalculator.getAge("Earth");
    expect(earthAge).toEqual(32);
  });

  it('should test whether the correct age on Mercury is returned', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let mercuryAge = ageCalculator.getAge("Mercury");
    expect(mercuryAge).toEqual(133);
  });

  it('should test whether the correct age on Venus is returned', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let ageOnVenus = ageCalculator.getAge("Venus");
    expect(ageOnVenus).toEqual(51);
  });

  it('should test whether the correct age on Mars is returned', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let ageOnMars = ageCalculator.getAge("Mars");
    expect(ageOnMars).toEqual(17);
  });

  it('should test whether the correct age on Jupiter is returned', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let ageOnJupiter = ageCalculator.getAge("Jupiter");
    expect(ageOnJupiter).toEqual(2);
  });


  //remaining years on earth

  //you should have died xx years ago
});
