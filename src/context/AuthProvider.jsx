'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase/firebase.init';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const signup = async (email, password, name) => {
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // ✅ এটি যোগ করুন - clearError function
  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    googleLogin,
    resetPassword,
    clearError,  // ✅ এটি যোগ করুন
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}