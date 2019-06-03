/* eslint-disable no-unused-vars */
export class AgeCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.earthAge = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).toPrecision(4) * 1);
    this.planetConversion = {
      "Mercury": 0.24, 
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    }
  }

  getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let earthAge = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        earthAge--;
        console.log("stuff", earthAge);
      }
      return earthAge;
  }

  remainingYears() {

  }


}