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
  return mathObj[props.operator](
    parseFloat(props.firstNum),
    parseFloat(props.secondNum)
  );
};
