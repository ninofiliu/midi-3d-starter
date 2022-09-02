import { useEffect, useRef } from "react";

// https://stackoverflow.com/a/60619061/8186898
export default (fn: () => any) => {
  const called = useRef(false);
  useEffect(() => {
    if (called.current) return;
    called.current = true;
    fn();
  }, []);
};
