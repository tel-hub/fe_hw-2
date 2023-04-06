// task 1

let arr1 = [1, 2, 3], arr2 = [4, 2, 1];

const findSame = (a1, a2) => {
  const ret = [];
  for (let i = 0; i < a1.length; i++) {
    const a1Element = a1[i];

    for (let j = 0; j < a2.length; j++) {
      const a2Element = a2[j];

      if (a2Element === a1Element) {
        ret.push(a2Element);
      }
    }
  }

  return ret;
}

console.log('task 1', findSame(arr1, arr2));

// task 2

const seit = (start) => {
  const ret = [];
  for (let i = 0; i <= start; i++) {
    ret.push(i);
  }

  return ret;
}

console.log('task 2', seit(5));


// task 3

const seitObj = (start) => {
  const ret = {};
  for (let i = 0; i <= start; i++) {
    ret[i] = i;
  }

  return ret;
}

console.log('task 3', seitObj(5));

// task 4

const textMultiple = (text, number) => {
  const ret = [];
  for (let i = 0; i < number; i++) {
    ret.push(text);
  }

  return ret;
}

console.log('task 4', textMultiple('text', 3));


// task 5

const textReverse = (text) => {
  let ret = '';
  for (let i = 0; i < text.length; i++) {
    ret = text.charAt(i) + ret;
  }

  return ret;
}

console.log('task 5', textReverse('abcde'));


// task 6

const textAnnA = (text) => {
  return text === textReverse(text);
}

console.log('task 6', textAnnA('TeNeT'));


// task 7

const maxPrice = (list) => {
  let ret = {};
  let maxPrice = -Infinity;
  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    if (item.price > maxPrice) {
      maxPrice = item.price;
      ret = item;
    }
  }

  return ret;
}

console.log('task 7', maxPrice([
  {name: 'product 1', price: 150},
  {name: 'product 2', price: 350},
  {name: 'product 3', price: 250},
  {name: 'product 4', price: 200}
]));
