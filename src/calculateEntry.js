const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, item) => {
    if (item.age < 18) acc.child += 1;
    if (item.age >= 18 && item.age < 50) acc.adult += 1;
    if (item.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const { adult: priceAdult, senior: priceSenior, child: priceChild } = data.prices;
  return (child * priceChild) + (adult * priceAdult) + (senior * priceSenior);
}

module.exports = { calculateEntry, countEntrants };
