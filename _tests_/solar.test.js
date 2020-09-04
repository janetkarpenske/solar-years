import { Galactic } from './../src/js/solar.js';

describe('Galactic', () => {
  test('should create an instance of Galactic', () => {
    let galactic = new Galactic(24, "North America");
    expect(galactic).toEqual({userAge: 24, continent: "North America"});
  });

  test('should return a life expectancy number', () => {
    expect(lifeExpect("North America").toEqual(80));
  });
});