
exports.min = function min (array) {
  if (array.length === 0 || !array) {
    return 0;
  } else {
    return Math.min(...array);
  }
}


exports.max = function max (array) {
  if (array.length === 0 || !array) {
    return 0;
  } else {
    return Math.max(...array);
  }
}


exports.avg = function avg(array) {
  if (array.length === 0 || !array) {
    return 0;
  } else {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
  }
}