// object destructuring
{
  const person = {
    name: 'Omar',
    age: '24',
    location: {
      city: 'Guadalajara',
      temp: 32
    }
  }

  const { name: firstName = 'Anonymous', age } = person;
  console.log(`${firstName} is ${age} years old`);

  const { city, temp: temperature } = person.location;
  if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
  }
  // ---------------------------------------------------

  const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
      name: 'Penguin'
    }
  }

  const { name: publisherName = 'Self-Published'} = book.publisher;
  console.log(publisherName);
}

// array destructuring
{
  const address = ['420 Rinconada de los Naranjos', 'Zapopan', 'Jalisco', '45180'];
  // console.log(`You are in ${address[1]}, ${address[2]}`);
  const [, city, state, , extra = 'hmmmm'] = address;
  console.log(`You are in ${city}, ${state} => ${extra}`);

  const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
  const [name, , mPrice] = item;
  console.log(`A medium ${name} costs ${mPrice}`);
}


