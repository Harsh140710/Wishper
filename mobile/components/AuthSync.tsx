import { useAuthCallBack } from "@/hooks/useAuth";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useEffect, useRef } from "react";
import * as Sentry from "@sentry/react-native";

const AuthSync = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const { mutate: syncUser } = useAuthCallBack();
  const hasSynced = useRef(false); // this is used to not run useEffect more than once

  useEffect(() => {
    if (isSignedIn && user && !hasSynced.current) {
      hasSynced.current = true;

      syncUser(undefined, {
        onSuccess: (data) => {
          console.log("✅ User synced with backend.", data.name);
          Sentry.logger.info(
            Sentry.logger.fmt`User synced with backend: ${data.name}`,
            {
              userId: user.id,
              userName: data.name,
            },
          );
        },
        onError: (error) => {
          console.log("❌ User synced failed.", error);
          Sentry.logger.error("Failed to sync user with backend", {
            userId: user.id,
            userName: error instanceof Error ? error.message : String(error),
          });
        },
      });
    }

    if (!isSignedIn) {
      hasSynced.current = false;
    }
  }, [isSignedIn, user, syncUser]);

  return null;
};

export default AuthSync;
