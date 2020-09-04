import { Galactic } from './../src/js/solar.js';

describe('Galactic', () => {
  test('should create an instance of Galactic', () => {
    let galactic = new Galactic(24, "North America");
    expect(galactic).toEqual({userAge: 24, continent: "North America"});
  });
});