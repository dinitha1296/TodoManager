// import firebase from '../firebase/config';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const onGoogleSignIn = (done, error) => async () => {
    done(true);
    // try {
    //     GoogleSignin.configure({
    //         scopes: ['email', 'profile'],
    //         webClientId:
    //             '',
    //         offlineAccess: false,
    //     });
    //     await GoogleSignin.hasPlayServices();
    //     console.log('Has play service');
    //     const credentials = await GoogleSignin.signIn();
    //     console.log(credentials);
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     provider.setCustomParameters({login_hint: 'user@example.com'});
    //     console.log('Google sign in');
    //     firebase
    //         .auth()
    //         .signInWithCredential(credentials)
    //         .then(result => {
    //             console.log('Successfull');
    //             console.log(result.user);
    //             done(result.user);
    //         })
    //         .catch(err => {
    //             console.log('Error');
    //             console.log(err);
    //             error(err);
    //         });
    // } catch (err) {
    //     error(err);
    // }
};

const onFacebookSignIn = (done, error) => async () => {
    done(true);
};

const onSignOut = (done, error) => () => {
    done(false);

    // firebase
    //     .auth()
    //     .signOut()
    //     .then(resut => {
    //         console.log('Successfull');
    //         console.log(resut);
    //         done(null);
    //     })
    //     .catch(err => {
    //         console.log('Error');
    //         console.log(err);
    //         error(err);
    //     });
};

const authServices = {
    onGoogleSignIn,
    onFacebookSignIn,
    onSignOut,
};

export default authServices;
