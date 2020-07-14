import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
  apiKey: 'AIzaSyBAFZIA0cJwEYqGtMjZO-gv9qcMwMG8v0A',
  authDomain: 'expensify-9d417.firebaseapp.com',
  databaseURL: 'https://expensify-9d417.firebaseio.com',
  projectId: 'expensify-9d417',
  storageBucket: 'expensify-9d417.appspot.com',
  messagingSenderId: '892545057156',
  appId: '1:892545057156:web:ce70796ce0335b4c40ddd1',
  measurementId: 'G-PNRTLFKLPW'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const expensesRef = database.ref('expenses');

expensesRef.on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

expensesRef.on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

expensesRef.on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// expensesRef.on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// expensesRef.push({
//   description: 'Gum',
//   note: 'mint flavored',
//   amount: 1950,
//   createdAt: 0
// });

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Feed the cat'
// });

// database.ref('notes/-MCDhgzF9P2qXVK9KK6W').update({
//   body: 'buy food'
// });

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((err) => {
//     console.log('Error fetching data', err);
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('Error fetching data', err);
// });
// database.ref().off('value', onValueChange);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const name = val.name;
//   const jobTitle = val.job.title;
//   const company = val.job.company;
//   console.log(`${name} is a ${jobTitle} at ${company}`);
// });

// --------- create and edit ---------------

// database.ref().set({
//   name: 'Omar Saucedo',
//   age: 24,
//   stressLevel: 4,
//   job: { 
//     title: 'Software Engineer',
//     company: 'Wizeline'
//   },
//   location: { 
//     city: 'Zapopan',
//     country: 'México'
//   }
// }).then(() => {
//   console.log('Data saved successfully');
// }).catch((err) => {
//   console.log('This failed', err);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'CDMX'
// });

// ------- remove -------------

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Data deleted successfully');
//   }).catch((err) => {
//     console.log('This failed', err);
//   });

// database.ref('isSingle').set(null)
//   .then(() => {
//     console.log('isSingle deleted successfully');
//   }).catch((err) => {
//     console.log('This failed', err);
//   });