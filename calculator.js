function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
    }
    return result;
  }
  let num1=10;
  let num2=5;
  let oprator='+';
  let result =calculator(num1,num2,oprator);
  console.log(result);