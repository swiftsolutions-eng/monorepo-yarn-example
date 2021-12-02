import { useEffect } from "react";

export const useMe = () => {
  useEffect(() => {
    console.log("you are using you");
  }, []);
};
