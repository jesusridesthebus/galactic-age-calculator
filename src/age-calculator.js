/* eslint-disable no-unused-vars */
export class AgeCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.earthAge = earthAge;
    this.planetConversion = {
      "Mercury": 0.24, 
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    }
  }

  getAge(birthday) {
    let earthAge = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).MathFloor); 
    return earthAge;
  }

  // remainingYears() {

  // }


}