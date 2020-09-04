import { Galactic } from './../src/js/solar';

describe('Galactic', () => {
  test('should create an instance of Galactic', () => {
    let galactic = new Galactic(24, "North America");
    expect(galactic).toEqual({age = 24, continent = "North America"});
  });
});