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
import { useHistory } from "react-router";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  initializeAuth();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true);

  // Create user
  const createUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setMessage("Successfully Register.");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // sign in using google account
  const googleSignIn = () => {
    setIsLoading(true);
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
    setIsLoading(true);
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
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setMessage("can not logging out");
      })
      .finally(() => {
        setIsLoading(false);
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
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
