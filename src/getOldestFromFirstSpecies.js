const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = data.employees.find((item) => item.id === id).responsibleFor[0];
  const objList = data.species.find((item) => item.id === firstSpecieId).residents;
  const olderAnimal = objList.reduce((acc, item) => {
    if (acc.age > item.age) return acc;
    return item;
  });
  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
