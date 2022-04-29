const data = require('../data/zoo_data');

function locationFilterOne() {
  return data.species.reduce((acc, item) => {
    if (item.location === 'NE') acc.NE.push(item.name);
    if (item.location === 'NW') acc.NW.push(item.name);
    if (item.location === 'SE') acc.SE.push(item.name);
    if (item.location === 'SW') acc.SW.push(item.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function sexVerify(item, sex) {
  const { name: specie } = item;
  return item.residents.reduce((acc, obj) => {
    if (obj.sex === sex) acc[specie].push(obj.name);
    return acc;
  }, { [specie]: [] });
}

function includeVerify(item) {
  const { name: specie } = item;
  return item.residents.reduce((acc, obj) => {
    acc[specie].push(obj.name);
    return acc;
  }, { [specie]: [] });
}

function includeSortVerify(item) {
  const { name: specie } = item;
  const objInclude = item.residents.reduce((acc, obj) => {
    acc[specie].push(obj.name);
    return acc;
  }, { [specie]: [] });
  objInclude[specie] = objInclude[specie].sort();
  return objInclude;
}

function sexIncludeSortVerify(item, sex) {
  const { name: specie } = item;
  const objSexInclude = item.residents.reduce((acc, obj) => {
    if (obj.sex === sex) acc[specie].push(obj.name);
    return acc;
  }, { [specie]: [] });
  objSexInclude[specie] = objSexInclude[specie].sort();
  return objSexInclude;
}

function locationFilterTwo(func, sex) {
  return data.species.reduce((acc, item) => {
    if (item.location === 'NE') acc.NE.push(func(item, sex));
    if (item.location === 'NW') acc.NW.push(func(item, sex));
    if (item.location === 'SE') acc.SE.push(func(item, sex));
    if (item.location === 'SW') acc.SW.push(func(item, sex));
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function checkProperties(sex, sorted) {
  if (!sex && !sorted) return locationFilterTwo(includeVerify);
  if (!sex) return locationFilterTwo(includeSortVerify);
  if (!sorted) return locationFilterTwo(sexVerify, sex);
  return locationFilterTwo(sexIncludeSortVerify, sex);
}

function getAnimalMap(options) {
  if (!options) return locationFilterOne();
  const { sex, includeNames, sorted } = options;
  if (!includeNames) return locationFilterOne();
  if (includeNames) return checkProperties(sex, sorted);
}
console.log(getAnimalMap({ includeNames: true, sorted: true }));
module.exports = getAnimalMap;
