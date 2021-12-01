import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDvRslDNHNHVSizXeqKwqOu1YmNL-6q92M",
  authDomain: "e-library-93fef.firebaseapp.com",
  projectId: "e-library-93fef",
  storageBucket: "e-library-93fef.appspot.com",
  messagingSenderId: "595992166673",
  appId: "1:595992166673:web:036b73825c498a3587ccb0"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
