//This is not working

const allPopulationData = require('../allCountries2');
const client = require('../client');

const populationArr = [];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {

  return knex('populations').del().then(function () {
    client("countries").select("*").then(countries => {
      allPopulationData.forEach(populationObj => {
        let country = countries.find(x => x.code == populationObj.countryCode);
        populationArr.push({
          year: populationObj.year,
          quantity: Math.floor(populationObj.value),
          "country_id": country.id
        })
      });
      return knex('populations').insert(populationArr);
    });
  })
};
