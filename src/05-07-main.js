function printMonth(n) {
  let month = ``;
  switch (n) {
    case 1: {
      month = `Jan`;
      break;
    }
    case 2: {
      month = `Feb`;
      break;
    }
    default: {
      month = `Non number`;
    }
  }
  return month;
}
console.log(printMonth(2));
