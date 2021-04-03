import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import { handleSignUp } from "../hooks/AWS";
import { useState, useEffect, createContext, FC, MouseEvent } from "react";

interface GlobalContextProps {
  Auth: typeof Auth;
  session: { isAuthenticated: boolean };
  handleLogIn: (e: MouseEvent) => Promise<void>;
  handleLogOut: (e: MouseEvent) => Promise<void>;
  handleSignUp: typeof handleSignUp;
}

Amplify.configure({
  Auth: {
    manditorySignId: true,
    region: "us-east-1", //config.cognito.REGION,
    userPoolId: process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEV_AWS_COG_USERPOOLID : process.env.NEXT_PUBLIC_PROD_AWS_COG_USERPOOLID,
    userPoolWebClientId: process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEV_AWS_COG_CLIENTID : process.env.NEXT_PUBLIC_PROD_AWS_COG_CLIENTID,
  },
});

export const GlobalContext = createContext<Partial<GlobalContextProps>>({});

export const GlobalProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState({
    isAuthenticated: false,
    isAuthenticating: false,
    user: null,
  });

  const [errors, setErrors] = useState({
    cognito: null,
    blankfield: false,
    passwordmatch: false,
    terms: false,
  });

  useEffect(() => {
    if (!session.isAuthenticated) {
      isCurrentSession();
    }
  }, [session]);
  return <GlobalContext.Provider value={{ Auth, session, handleLogOut, handleLogIn, handleSignUp }}>{children}</GlobalContext.Provider>;

  async function handleLogOut(e: MouseEvent) {
    e.preventDefault();
    try {
      await Auth.signOut();
      setSession({
        isAuthenticated: false,
        isAuthenticating: false,
        user: null,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  async function handleLogIn(e: MouseEvent) {
    e.preventDefault();
    try {
      const session = await Auth.signIn({
        //TODO: Remove the folloing values. They are for testing only.
        username: process.env.NEXT_PUBLIC_TEST_USERNAME!,
        password: process.env.NEXT_PUBLIC_TEST_PASSWORD!,
      });

      if (session) {
        setSession({
          isAuthenticated: false,
          isAuthenticating: false,
          user: null,
        });
        // localStorage.setItem("currentUserSession", "");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async function isCurrentSession() {
    try {
      // const session = await Auth.currentSession();
      //  setAuthStatus(true);

      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      setSession({ isAuthenticated: true, isAuthenticating: false, user });
    } catch (error) {
      console.log(error);
    }
  }
};
