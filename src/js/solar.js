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
      let mercExpectancy = Math.round(this.lifeExpectancy/(24/100));
      if (mercExpectancy >= mercAge) {
        this.mercuryExpect = mercExpectancy - mercAge
      }
      else {
        this.mercuryExpect = (mercExpectancy - mercAge)
      }
      return mercAge;
    }
    venus() {
      let venAge = Math.round(this.userAge/(62/100));
      let venExpectancy = Math.round(this.lifeExpectancy/(62/100));
      if (venExpectancy >= venAge) {
        this.venusExpect = venExpectancy - venAge
      }
      else {
        this.venusExpect = (venExpectancy - venAge)
      }
      return venAge;
    }
    mars() {
      let marAge = Math.round(this.userAge/(188/100));
      let marExpectancy = Math.round(this.lifeExpectancy/(188/100));
      if (marExpectancy >= marAge) {
        this.marsExpect = marExpectancy - marAge
      }
      else {
        this.marsExpect = (marExpectancy - marAge)
      }
      return marAge;
    }
    jupiter() {
      let jupAge = Math.round(this.userAge/(1186/100));
      let jupExpectancy = Math.round(this.lifeExpectancy/(1186/100));
      if (jupExpectancy >= jupAge) {
        this.jupiterExpect = jupExpectancy - jupAge
      }
      else {
        this.jupiterExpect = (jupExpectancy - jupAge)
      }
      return jupAge;
    }
  }
