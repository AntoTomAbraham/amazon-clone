import firebase  from "firebase";
const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyDkaaUBlwScKs_E1pRpXF1tFpjxS0guPeY",
        authDomain: "ecommerce-663ef.firebaseapp.com",
        databaseURL: "https://ecommerce-663ef.firebaseio.com",
        projectId: "ecommerce-663ef",
        storageBucket: "ecommerce-663ef.appspot.com",
        messagingSenderId: "901751652988",
        appId: "1:901751652988:web:179e98b067e3b5adeb3ff9",
        measurementId: "G-NC63DF3SP8"
});
const auth=firebase.auth();
export{auth};
