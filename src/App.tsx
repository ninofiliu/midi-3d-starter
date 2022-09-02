import { useEffect, useRef } from "react";

// https://stackoverflow.com/a/60619061/8186898
const useOnce = (fn: () => any) => {
  const called = useRef(false);
  useEffect(() => {
    if (called.current) return;
    called.current = true;
    fn();
  }, []);
};

export default () => {
  useOnce(async () => {
    if (!("requestMIDIAccess" in navigator)) {
      alert(
        "WebMIDI not supported. Please open this in a Chromium-based browser"
      );
      return;
    }
    const access = await navigator.requestMIDIAccess();
    for (const input of access.inputs.values()) {
      console.log(`Detected input: ${input.name}`);
      input.addEventListener("midimessage", (evt) => {
        console.log(`Received data from ${input.name}: ${evt.data.join(" ")}`);
      });
    }
  });
  return <></>;
};
