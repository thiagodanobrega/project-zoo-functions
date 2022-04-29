const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(
    (obj) => obj.firstName === employeeName || obj.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
