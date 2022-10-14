const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let alphabet = members.sort();
  let teamString = alphabet.filter((el) => typeof el === "string");
  let teamStringUpper = teamString.filter(
    (el) => el[0] === el[0].toUpperCase()
  );

  let result = teamStringUpper.map((el) => el[0]);
  let x = result.join("");
  return x;
}

module.exports = {
  createDreamTeam,
};
