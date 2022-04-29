const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
  }
  const { residents } = data.species.find(({ name }) => name === animal.specie);
  if ('sex' in animal) {
    return residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return residents.length;
}

module.exports = countAnimals;
