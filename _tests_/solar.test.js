import { Galactic } from './../src/js/solar.js';

describe('Galactic', () => {

  let galactic;

  beforeEach(() => {
    galactic = new Galactic(24, "North America");
  });

  test('should create an instance of Galactic', () => {
    expect(galactic).toEqual({userAge: 24, continent: "North America"});
  });

  test('should return a life expectancy number', () => {
    expect(galactic.lifeExpect()).toEqual(80);
  });

  test('should return the users age based on mercury years', () => {
    expect(galactic.mercury()).toEqual(100);
  });

  test('should return the users age based on Venus years', () => {
    expect(galactic.venus()).toEqual(39);
  });

  test('should return the users age based on Mars years', () => {
    expect(galactic.mars()).toEqual(13);
  });

  test('should return the users age based on Mars years', () => {
    expect(galactic.jupiter()).toEqual(2);
  });

  test('adds mercury years to constructor', () => {
    galactic.lifeExpect();
    expect(galactic.lifeExpectancy).toEqual(80);
  });

  test('makes life expectancy on other planets a property of constructor', () => {
    galactic.lifeExpect();
    galactic.mercury();
    galactic.venus();
    galactic.mars();
    galactic.jupiter();
    expect(galactic.mercuryExpect).toEqual(233);
    expect(galactic.venusExpect).toEqual(90);
    expect(galactic.marsExpect).toEqual(30);
    expect(galactic.jupiterExpect).toEqual(5);
  });
});