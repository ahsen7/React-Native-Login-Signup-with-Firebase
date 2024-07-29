import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../config/Firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Initializing auth state change listener...');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('User Details', user);
      setUser(user ? user : null);
    });

    return () => {
      console.log('Cleaning up auth state change listener...');
      unsubscribe();
    };
  }, []);

  return { user };
};

export default useAuth;
