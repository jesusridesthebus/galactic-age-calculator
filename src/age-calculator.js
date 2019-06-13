/* eslint-disable no-unused-vars */
export class AgeCalculator {
  constructor(birthday) {
    this.birthday = new Date(birthday);
    this.planetConversion = {
      "Mercury": 0.24,
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86,
      "Earth": 1
    }
  }

  getAge(planet) {
    console.log(new Date().getTime() - this.birthday.getTime());
    let earthAge = Math.floor(((new Date().getTime() - (this.birthday).getTime()) / 31557600000));
    return Math.floor(earthAge / this.planetConversion[planet]);
  }

  // remainingYears() {

  // }


}
