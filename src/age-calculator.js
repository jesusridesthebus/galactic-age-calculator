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

  earthAge(birthday) {
    let earthAge = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).MathFloor); 
    return earthAge;
  }

  // getAge(dateString) {
  //   let today = new Date();
  //   let birthDate = new Date(dateString);
  //   let earthAge = today.getFullYear() - birthDate.getFullYear();
  //   let month = today.getMonth() - birthDate.getMonth();
  //   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  //       earthAge--;
  //       console.log("stuff", earthAge);
  //     }
  //     return earthAge;
  // }

  remainingYears() {

  }


}