const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find(({ name }) => name === animal);
  return residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
