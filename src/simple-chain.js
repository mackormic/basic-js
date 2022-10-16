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
    if (value === undefined) {
      this.arr.push(" ");
    } else if (value === null) {
      this.arr.push("null");
    } else if (typeof value === "function") {
      this.arr.push("function () { }");
    } else {
      this.arr.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (
      position != +position ||
      Number.isInteger(position) === false ||
      this.arr.length - 1 < position ||
      position <= 0
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    } else if (this.arr.length > 0) {
      this.arr.splice(position - 1, 1);
    }
    return this;
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
