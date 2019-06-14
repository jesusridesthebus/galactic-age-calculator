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

  it('should test whether remaining years on Earth are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let earthRemaining = ageCalculator.remainingYears("Earth");
    expect(earthRemaining).toEqual(46);
  });

  it('should test whether remaining years on Mercury are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let mercuryRemaining = ageCalculator.remainingYears("Mercury");
    expect(mercuryRemaining).toEqual(192);
  });

  it('should test whether remaining years on Venus are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let venusRemaining = ageCalculator.remainingYears("Venus");
    expect(venusRemaining).toEqual(74);
  });

  it('should test whether remaining years on Mars are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let marsRemaining = ageCalculator.remainingYears("Mars");
    expect(marsRemaining).toEqual(24);
  });

  it('should test whether remaining years on Jupiter are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1987");
    let jupiterRemaining = ageCalculator.remainingYears("Jupiter");
    expect(jupiterRemaining).toEqual(4);
  });

  it('should test whether extra years on Earth are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1900");
    let earthExtra = ageCalculator.yearsPastExpectancy("Earth");
    expect(earthExtra).toEqual(41);
  });

  it('should test whether extra years on Mercury are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1900");
    let mercuryExtra = ageCalculator.yearsPastExpectancy("Mercury");
    expect(mercuryExtra).toEqual(170);
  });

  it('should test whether extra years on Venus are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1900");
    let venusExtra = ageCalculator.yearsPastExpectancy("Venus");
    expect(venusExtra).toEqual(65);
  });

  it('should test whether extra years on Mars are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1900");
    let marsExtra = ageCalculator.yearsPastExpectancy("Mars");
    expect(marsExtra).toEqual(21);
  });

  it('should test whether extra years on Jupiter are correct', () => {
    let ageCalculator = new AgeCalculator("April 27, 1900");
    let jupiterExtra = ageCalculator.yearsPastExpectancy("Jupiter");
    expect(jupiterExtra).toEqual(3);
  });

});
