import { useEffect } from "react";

import {
  unlockAlertSound,
} from "./audioManager";


export function AudioUnlockProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {

    const unlock = () => {
      unlockAlertSound();

      window.removeEventListener(
        "click",
        unlock
      );

      window.removeEventListener(
        "keydown",
        unlock
      );
    };


    window.addEventListener(
      "click",
      unlock
    );

    window.addEventListener(
      "keydown",
      unlock
    );


    return () => {
      window.removeEventListener(
        "click",
        unlock
      );

      window.removeEventListener(
        "keydown",
        unlock
      );
    };

  }, []);


  return children;
}
