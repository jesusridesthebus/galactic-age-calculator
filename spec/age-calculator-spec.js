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

  it('should test whether remaining years on Earth is correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let earthAge = ageCalculator.remainingYears("Earth");
    expect(earthAge).toEqual(46);
  });

  it('should test whether remaining years on Mercury is correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let mercuryAge = ageCalculator.remainingYears("Mercury");
    expect(mercuryAge).toEqual(192);
  });

  it('should test whether remaining years on Venus is correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let venusAge = ageCalculator.remainingYears("Venus");
    expect(venusAge).toEqual(74);
  });

  it('should test whether remaining years on Mars is correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let marsAge = ageCalculator.remainingYears("Mars");
    expect(marsAge).toEqual(24);
  });

  it('should test whether remaining years on Jupiter is correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let jupiterAge = ageCalculator.remainingYears("Jupiter");
    expect(jupiterAge).toEqual(4);
  });


  //remaining years on earth

  //you should have died xx years ago
});
