const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;
function getSpecies(arr) {
  return arr.reduce((acc, item) => {
    const obj = species.find(({ id }) => id === item);
    acc.push(obj.name);
    return acc;
  }, []);
}

function getLocations(arr) {
  return arr.reduce((acc, item) => {
    const obj = species.find(({ id }) => id === item);
    acc.push(obj.location);
    return acc;
  }, []);
}

function employeeInfo(objPerson) {
  const obj = {
    id: objPerson.id,
    fullName: `${objPerson.firstName} ${objPerson.lastName}`,
    species: getSpecies(objPerson.responsibleFor),
    locations: getLocations(objPerson.responsibleFor),
  };
  return obj;
}

function employeeList() {
  return employees.reduce((acc, item) => {
    acc.push({
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: getSpecies(item.responsibleFor),
      locations: getLocations(item.responsibleFor),
    });
    return acc;
  }, []);
}

function getEmployeesCoverage(obj) {
  if (!obj) return employeeList();
  const objPerson = employees.find((item) => item.firstName === obj
    .name || item.lastName === obj.name || item.id === obj.id);
  if (objPerson) return employeeInfo(objPerson);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
