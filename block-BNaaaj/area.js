function areaOfSqu(side) {
  return side * side;
}

function areaOfRec(len, wid) {
  return len * wid;
}

function areaOfCrc(r) {
  return 3.14 * r * r;
}

module.exports = {
  areaOfSqu: areaOfSqu,
  areaOfRec: areaOfRec,
  areaOfCrc: areaOfCrc,
};
