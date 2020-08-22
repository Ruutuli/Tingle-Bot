function getSeason() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  if ((month > 2 && month < 5) || (month === 2 && day > 20) || (month === 5 && day < 21)) {
    return 'spring';
  }
  if ((month > 5 && month < 8) || (month === 5 && day > 20) || (month === 8 && day < 21)) {
    return 'summer';
  }
  if ((month > 8 && month < 11) || (month === 8 && day > 20) || (month === 11 && day < 21)) {
    return 'fall';
  }
  return 'winter'
}

module.exports = { getSeason }
