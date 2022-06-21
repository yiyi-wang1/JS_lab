const data = require('../allCountries');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('countries').del().then(function () {
    // Deletes ALL existing entries
    const array = [];
    for (let i = 0; i < data.length; i++) {
      if (i > 0) {
        const prev = data[i - 1];
        const curr = data[i]
        if (prev.countryName == curr.countryName && prev.countryCode == curr.countryCode) {
          i++;
        } else {
          const element = data[i];
          const newCountry = {};
          newCountry.name = element.countryName;
          newCountry.code = element.countryCode;
          array.push(newCountry);
        }
      } else {
        const element = data[0];
        const newCountry = {};
        newCountry.name = element.countryName;
        newCountry.code = element.countryCode;
        array.push(newCountry);
      }
    }
    return knex('countries').insert(array);
  })
};
