export class Galactic {
  constructor(userAge, continent) {
    this.userAge = userAge,
    this.continent = continent
    this.lifeExpectancy;
    this.mercuryExpect;
    this.venusExpect;
    this.marsExpect;
    this.jupiterExpect;
  }

  lifeExpect() {
    if (this.continent === "North America") {
      this.lifeExpectancy = 80;
      return 80;
    }
    if (this.continent === "South America") {
      this.lifeExpectancy = 70;
      return 76;
    }
    if (this.continent === "Europe") {
      this.lifeExpectancy = 81;
      return 81;
    }
    if (this.continent === "Africa") {
      this.lifeExpectancy = 65;
      return 65;
    }
    if (this.continent === "Asia") {
      this.lifeExpectancy = 78;
      return 78;
    }
    if (this.continent === "Australia") {
      this.lifeExpectancy = 82;
      return 82;
    } }

    mercury() {
      let mercAge = Math.round(this.userAge/(24/100));
      
      return mercAge;
    }
    venus() {
      let venAge = Math.round(this.userAge/(62/100));
      return venAge;
    }
    mars() {
      let marAge = Math.round(this.userAge/(188/100));
      return marAge;
    }
    jupiter() {
      let jupAge = Math.round(this.userAge/(1186/100));
      return jupAge;
    }
  }
