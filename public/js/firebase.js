let firebaseConfig = {
  
  apiKey: "AIzaSyCqbPT4SGpenfl-IC2ZIAOXCFPQkL64AAc",
  authDomain: "easyblogs-6c2d8.firebaseapp.com",
  projectId: "easyblogs-6c2d8",
  storageBucket: "easyblogs-6c2d8.appspot.com",
  messagingSenderId: "898336979518",
  appId: "1:898336979518:web:c884bdc46dc58e9c30af6f"
    // Enter your firebase credentials
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();