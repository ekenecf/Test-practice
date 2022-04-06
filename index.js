stringLength = (string) => {
    const len = string.length; 
    if (len > 1 && len <= 10) {
        return len;
    } else {
        throw new Error('string is greater than 10 characters');
      }
}

reverseString = (string) => {
    const strArr = [...string]
    reverseArr = strArr.reverse();
    reverseStr = reverseArr.join('');
    return reverseStr;
}

Capitalise = (string) => {
    const strArr = [...string]
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  }

  class Calculator{
    constructor(num1, num2){
      this.num1 = num1;
      this.num2 = num2;
    }

    add(){
        return this.num1 + this.num2
    }

    subtract() {
        return this.num1 - this.num2
    }

    multiply() {
        return this.num1 * this.num2
    }

    divide() {
        return this.num1 / this.num2
    }

    Capitalise(string) {
        return string.toUpperCase();
    }
}
module.exports = { stringLength, reverseString, Capitalise, Calculator }