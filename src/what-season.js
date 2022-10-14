const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let mistakeDate = "Unable to determine the time of year!";
  if (!date) {
    return mistakeDate;
  }
  if (typeof date.getMonth !== "function") {
    return Error("Invalid date!");
  }
  let month = date.getMonth();

  if (month >= 0 && month < 2) {
    return "winter";
  } else if (month >= 2 && month < 5) {
    return "spring";
  } else if (month >= 5 && month < 8) {
    return "summer";
  } else if (month >= 8 && month < 11) {
    return "autumn";
  } else if (month == 11) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
