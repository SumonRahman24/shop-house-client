import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "./../firebase/firebase.config";

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

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = () => {
    setLoading(true);
    return logOut(auth);
  };

  // udpate profile
  const updateUserProfile = (userInfo, profile) => {
    return updateProfile(userInfo, profile);
  };

  // signInWtihGoogle
  const signInWithGoogle = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, googleProvider);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });

    if (user) {
      setLoading(false);
    }

    return () => {
      unsubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    signIn,
    signUp,
    updateUserProfile,
    setUser,
    logOut,
    loading,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
