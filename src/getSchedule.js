const data = require('../data/zoo_data');

function visitingTimes(day) {
  const obj = data.hours[day];
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${obj.open}am until ${obj.close}pm`;
}

function animalsAvailablePerDay(day) {
  const objs = data.species;
  if (day === 'Monday') return ('The zoo will be closed!');
  return objs.reduce((acc, item) => {
    if (item.availability.includes(day)) acc.push(item.name);
    return acc;
  }, []);
}

function animalVisitDays(animal) {
  const objs = data.species;
  return objs.find(({ name }) => name === animal).availability;
}

function visitingDaysAndTimes(...days) {
  const arrDays = days.reduce((acc, val) => acc.concat(val), []);
  return arrDays.reduce((acc, day) => {
    acc[day] = {
      officeHour: visitingTimes(day),
      exhibition: animalsAvailablePerDay(day),
    };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  const arrDays = Object.keys(data.hours);
  const { species } = data;
  if (arrDays.includes(scheduleTarget)) return visitingDaysAndTimes(scheduleTarget);
  if (species.some(({ name }) => name === scheduleTarget)) return animalVisitDays(scheduleTarget);
  return visitingDaysAndTimes(arrDays);
}

module.exports = getSchedule;
