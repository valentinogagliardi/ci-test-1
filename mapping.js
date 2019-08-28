function mapping(arr, to) {
  if (to === "object")
    return arr.map(function(element) {
      return {
        id: element
      };
    });
  return arr;
}

module.exports = mapping;
