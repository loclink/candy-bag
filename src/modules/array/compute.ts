/**
 * 数字数组求和
 * @param numArray  number类型的数组
 * @returns
 */
const numArraySum = (numArray: number[]) => {
  return numArray.reduce((preValue, currentValue) => {
    return preValue + currentValue;
  }, 0);
};

export { numArraySum };
