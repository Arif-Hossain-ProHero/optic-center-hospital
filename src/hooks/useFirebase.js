import initializeAuth from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  initializeAuth();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Create user
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setMessage("Successfully Register.");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // sign in using google account
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    //   console.log(result.user);
    //   setMessage("Successfully sign in.");
    // })
    // .catch((error) => {
    //   setError("Can not sign in using google.");
    // });
  };

  // login user
  const passwordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   console.log(result.user);
    //   setUser(result.user);
    //   setMessage("Successfully sign in.");
    // })
    // .catch((error) => {
    //   setError("Can't log in.");
    // });
  };
  // password reset
  const passwordReset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset link is sent to your Email");
      })
      .catch((error) => {
        setError("Could not reset password.");
      });
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  //logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setMessage("can not logging out");
      });
  };

  return {
    user,
    createUser,
    passwordLogin,
    error,
    logOut,
    googleSignIn,
    updateName,
    message,
    passwordReset,
  };
};

export default useFirebase;
