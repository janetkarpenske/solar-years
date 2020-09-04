export class Galactic {
  constructor(userAge, continent) {
    this.userAge = userAge,
    this.continent = continent
  }

  lifeExpect() {
    if (this.continent === "North America") {
      return 80;
    }
    if (this.continent === "South America") {
      return 76;
    }
    if (this.continent === "Europe") {
      return 81;
    }
    if (this.continent === "Africa") {
      return 65;
    }
    if (this.continent === "Asia") {
      return 78;
    }
    if (this.continent === "Australia") {
      return 82;
    } }

    mercury() {
      return Math.round(this.userAge/(24/100));
    }
    venus() {
      return Math.round(this.userAge/(62/100));
    }
    mars() {
      return Math.round(this.userAge/(188/100));
    }
    jupiter() {
      return Math.round(this.userAge/(1186/100));
    }
  }
