import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', () => {
  it('should test whether birthday is converted to earth years', () => {
    let ageCalculator = new AgeCalculator("1987-04-27");
    let earthAge = ageCalculator.earthAge;
    expect(earthAge).toEqual(32);
  });

  it('should test whether correct age on Mercury is returned', () => {
    let mercuryAge = ageCalculator.getAgeOnMercury();
    expect(mercuryAge).toEqual(133);
  });

  it('should test whether the right age on any planet is returned', () => {
    let ageCalculator = new AgeCalculator("1987-04-27");
    let ageOnMercury = ageCalculator.getAgeOnAnyPlanet("Mercury");
    expect(ageOnMercury).toEqual(133);
  });


  //remaining years on earth

  //remaining years on any planet

  //you should have died xx years ago
});