const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const objs = data.employees.filter(({ managers }) => managers.includes(managerId));
  return objs.map((obj) => `${obj.firstName} ${obj.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
