/* eslint-disable no-unused-vars */
export class AgeCalculator {
  constructor(birthday) {
    this.birthday = new Date(birthday);
    this.planetConversion = {
      "Mercury": 0.24,
      "Venus": 0.62,
      "Earth": 1,
      "Mars": 1.88,
      "Jupiter": 11.86
    };
  }

  getAge(planet) {
    let earthAge = Math.floor(((new Date().getTime() - (this.birthday).getTime()) / 31557600000));
    return Math.floor(earthAge / this.planetConversion[planet]);
  }

  remainingYears(planet) {
    let earthAge = Math.floor(((new Date().getTime() - (this.birthday).getTime()) / 31557600000));
    let lifeRemaining = (78/this.planetConversion[planet]) - this.getAge(planet);
    return Math.floor(lifeRemaining);
  }

  yearsPastExpectancy(planet) {
    let earthAge = this.getAge(planet);
    let lifeExpectancy = 78/this.planetConversion[planet];
    if(earthAge >= lifeExpectancy) {
      return Math.floor(earthAge - lifeExpectancy);
    }
    return Math.floor(lifeExpectancy);
  }
  
}
