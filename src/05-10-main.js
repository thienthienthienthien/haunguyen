function classifyStudent(mark) {
  let result;

  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = `Bad`;
      break;
    }

    case 4:
    case 5:
    case 6: {
      result = `Not bad`;
      break;
    }

    case 7:
    case 8: {
      result = `Good`;
      break;
    }

    case 9:
    case 10: {
      result = `Excellence`;
      break;
    }

    default: {
      result = `Invalid`;
    }
  }

  return result;
}

console.log(classifyStudent(10));
console.log(classifyStudent(1));
