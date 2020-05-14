
// import * as firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBNvWKvnuLHl9XIuuAKZZSL5VTkVlXsJ0c',
//   authDomain: 'meal2-b8cb2.firebaseapp.com',
//   databaseURL: 'https://meal2-b8cb2.firebaseio.com',
//   projectId: 'meal2-b8cb2',
//   storageBucket: 'meal2-b8cb2.appspot.com',
//   messagingSenderId: '898521945246',
//   appId: '1:898521945246:web:c84c53a4aa74522d50d78f',
//   measurementId: 'G-4NM0Z51RFF'
// }

// var db = {};

// Initialize Firebase
// export function init_firebase (){
//     firebase.initializeApp(firebaseConfig);
//     db = firebase.firestore();
    
//     // firebase.auth().onAuthStateChanged((user) => {
       

//     //   });

// }

// export function create_user(email,password){
    
//     return new Promise(function(resolve,reject){
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then( function() {
//             console.log("Funcionó desde Firebase");
            
//             resolve("ok")
//         } )
//         .catch(function(error) {
//             // Handle Errors here.
//             let errorCode = error.code;
//             let errorMessage = error.message;
//             console.log("Desde Firebase", errorCode, errorMessage);
//             reject("fail")
//         })
//     });

// }


// export function get_restaurant(id){
//     let docRef = db.collection("Restaurants").doc(id);
//     return new Promise(function(resolve,reject){
//         docRef.get().then(function(doc) {
//             if (doc.exists) {
//                 // console.log("Document data:", doc.data());
//                 resolve(doc.data()) ;
//             } else {
//                 // doc.data() will be undefined in this case
//                 // console.log("No such document!");
//                 reject("No document");
//             }
//         }).catch(function(error) {
//             console.log("Error getting document:", error);
//             reject(error);
//         });
//     });
    


// }
