function filterByType(sort) {
  let args = Array.prototype.slice.call(arguments);
  args = args.slice(1);
  let result = [];

  for (let i = 0, j = 0; i < args.length; i++) {
    if (sort == typeof(args[i])) {
      result[j] = args[i];
      j++;
    } 
  }
  return result;
}

console.log(filterByType(`boolean`, 10, 20, 'a', 'b', true, false));