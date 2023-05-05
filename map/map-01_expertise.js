const list = [
  { name: 'andré',
    age: 30,
  },
  { name: 'joão',
    age: 20,
  },
  { name: 'maria',
    age: 25,
  },
  { name: 'josé',
    age: 40,
  }
]


// const stringNameAge = `${item.name} + ${item.age}` does not work
// const stringNameAge = '${item.name} + ${item.age}' works, but it is a string not a function, expected outcome
const stringNameAge = (item) => `${item.name} + ${item.age}`; // works because it is a function

console.log(list.map(item => item.name));

const same = (item) => {
  return item.name
}
console.log(list.map(same));

const convertObject = (item) => {
  const stringNameAge = `${item.name} + ${item.age}`
  return {
    name: item.name,
    age: item.age,
    // nameAge: stringNameAge
    nameAge: stringNameAge(item)
  }
}
console.log(list.map(convertObject));

const convertObjectWithSpread = (item) => {
  return {
    ...item,
    // nameAge: stringNameAge
    nameAge: stringNameAge(item)
  }
}
console.log(list.map(convertObjectWithSpread));

const convertObjectWithSpreadObs = (item) => {
  return {
    ...item,
    // age: stringNameAge
    age: stringNameAge(item)
    
  }
}
console.log(list.map(convertObjectWithSpreadObs));