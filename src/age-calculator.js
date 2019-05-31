export class AgeCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.earthAge = ;
    this.planetConversion = [["Mercury", 0.24], ["Venus", 0.62], ["Mars", 1.88], ["Jupiter", 11.86]] ;
  }

  getAge(birthdate) {
    let today = new Date();
    let birthday = new Date(birthdate);
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if(month < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }

  remainingYears() {

  }


}