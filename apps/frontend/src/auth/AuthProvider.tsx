import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  initializeAuth,
} from "./authService";


const AuthContext =
  createContext({
    ready: false,
  });


export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [ready, setReady] =
    useState(false);


  useEffect(() => {

    async function init() {

      await initializeAuth();

      setReady(true);
    }

    init();

  }, []);


  return (
    <AuthContext.Provider
      value={{
        ready,
      }}
    >
      {ready && children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
