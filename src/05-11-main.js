// A list of error codes from sever
// E01: Invalid username or password
// E02: Too many attemps
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCodes and return according message
function getErrorCode(errorCode) {
  let message;

  switch (errorCode) {
    case `E01`: {
      message = `Invalid username or password`;
      break;
    }

    case `E02`: {
      message = `Too many attemps`;
      break;
    }

    case `E03`: {
      message = `Missing data`;
      break;
    }

    default: {
      message = `Something went wrong`;
    }
  }

  return message;
}

function getErrorCode(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: `Too many attemps`,
    E03: 'Missing data',
  };

  const message = errorMap[errorCode] || 'Something went wrong';

  return message;
}

console.log(getErrorCode(`E01`));
console.log(getErrorCode(`E02`));
console.log(getErrorCode(`E03`));
console.log(getErrorCode(`E04`));
