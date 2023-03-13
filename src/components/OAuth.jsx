import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { db } from '../firebase';

const OAuth = () => {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      //This is the FIRST thing to do, signing up with the classic googlePopUp;
      //⬇️ for that we need getAuth and GoogleAuthProvider from firebase/auth
      const result = await signInWithPopup(auth, provider);
      //⬇️ SECONDly we get the user, which is coming as a promise result from the signInWithPopup
      const user = result.user;

      //we gotta check if the user does already exist!
      const docRef = doc(db, 'users', user.uid); //we need to compare the uid of the user with the uid's of the collection in firebase, so we do this reference

      const docSnap = await getDoc(docRef); //now this is going to retur a promise, it's gonna check all the docs in the collection, and if it's an uid avaiable, it's gonna be saved on "getDoc"
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success('Successfully logged in!');
      navigate('/profile');
    } catch (error) {
      toast.error('There was an error with the Google Authentication');
    }
  }
  return (
    <button type="button" onClick={onGoogleClick}>
      <FcGoogle />
      Continue with Google
    </button>
  );
};

export default OAuth;
