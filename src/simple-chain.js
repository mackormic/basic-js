const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(/* position */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let mainArr = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (i == 0) {
        mainArr.push(`( ${this.arr[i]} )`);
      } else {
        mainArr.push(`~~( ${this.arr[i]} )`);
      }
    }
    this.arr = [];
    return mainArr.join("");
  },
};

module.exports = {
  chainMaker,
};
