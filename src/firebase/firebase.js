import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  googleAuthProvider,
  database as default
};

// const expensesRef = database.ref('expenses');

// expensesRef.on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// expensesRef.on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// expensesRef.on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

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