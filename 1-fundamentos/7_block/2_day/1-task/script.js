const customer = {
  firstName: 'Roberto',
  age: 22,
};

const createNewKeyValue = (object, key, keyValue) => {
  object[key] = keyValue;
};

createNewKeyValue(customer, 'job', 'Teacher');

console.table(customer);