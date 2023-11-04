import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signUp
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // updateUserProfile
  const updateUserProfile = (userInfo, profile) => {
    setLoading(true);
    return updateProfile(userInfo, profile);
  };

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // signWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //getEmail
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);

      // jwt auth
      if (currentUser) {
        axios
          .post("https://shop-house-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("jwt data", res.data));
      } else {
        axios
          .post("https://shop-house-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("jwt cookie clean data", res.data));
      }
    });

    if (user) {
      setLoading(false);
    }

    return () => {
      return unSubscribe();
    };
  }, [user]);

  const authInfo = {
    signIn,
    signUp,
    loading,
    user,
    logOut,
    signInWithGoogle,
    setUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
