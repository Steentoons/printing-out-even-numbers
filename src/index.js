// Print all even numbers challenge...
const printEvenNumbers = () => {
  let newArray;
  let arrayNumber = [];

  const addEvenToArray = (number) => {
    if (number % 2 === 0) {
      arrayNumber.push(number);
    }

    return arrayNumber;
  };

  for (let i = 0; i <= 10; i++) {
    newArray = addEvenToArray(i);
  }

  console.log(newArray);
};

printEvenNumbers();

// Print a table containing multiplication tables challenge...
