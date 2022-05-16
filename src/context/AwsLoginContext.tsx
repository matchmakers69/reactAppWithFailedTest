import { createContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export const AwsLoginContext = createContext({
  isLoggedIn: false,
});

export const AwsLoginContextProvider = (props: { children: JSX.Element }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const checkUserLoggedIn = async () => {
        try {
          const awsUser = await Auth.currentAuthenticatedUser();

          if (awsUser) {
            setLoggedIn(true);
          }
        } catch (err) {
          console.log("AwsLoginContextProvider.initState:", err);
          setLoggedIn(false);
        }
      };
      checkUserLoggedIn();
    }
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event } }) => {
      if (event === "signIn") {
        setLoggedIn(true);
      } else if (event === "signOut") {
        setLoggedIn(false);
      }
    });

    // unregister to avoid multiple Hub listeners being fired
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      Hub.remove("auth", () => {});
    };
  }, []);

  const context = {
    isLoggedIn,
  };

  return <AwsLoginContext.Provider value={context}>{props.children}</AwsLoginContext.Provider>;
};
