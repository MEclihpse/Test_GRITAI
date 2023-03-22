const checkParams = (input) => {
  for (let key in input) {
    if (!input[key]) {
      return false;
    }
  }
  return true;
};


module.exports = {
  checkParams,
};
