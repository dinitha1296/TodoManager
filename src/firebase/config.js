import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
}

export default firebase;
