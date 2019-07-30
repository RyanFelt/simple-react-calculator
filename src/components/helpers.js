export const math = props => {
  const mathObj = {
    '+': (x, y) => {
      return x + y;
    },
    '-': (x, y) => {
      return x - y;
    },
    '*': (x, y) => {
      return x * y;
    },
    '/': (x, y) => {
      return x / y;
    }
  };
  let result = mathObj[props.operator](
    parseFloat(props.firstNum),
    parseFloat(props.secondNum)
  );

  if (Math.round(result) !== result) result = parseFloat(result.toFixed(2)); //Need to parseFloat again to remove trailing 0's
  return result.toString();
};
