// get average from data
var average = function (data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
};

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
