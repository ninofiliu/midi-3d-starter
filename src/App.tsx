import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Controls from "./Controls";
import useOnce from "./useOnce";

export default () => {
  const [radius, setRadius] = useState(0.5);
  const [presseds, setPresseds] = useState(Array(128).fill(false));

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
        // key down
        if (evt.data[0] === 144) {
          presseds[evt.data[1]] = true;
          setPresseds([...presseds]);
        }
        // key down
        if (evt.data[0] === 128) {
          presseds[evt.data[1]] = false;
          setPresseds([...presseds]);
        }
        // knob
        if (evt.data[0] === 176) {
          setRadius(evt.data[2] / 128);
        }
      });
    }
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        {presseds.map((pressed, i) => (
          <mesh key={i} position={[(i % 12) - 6, Math.floor(i / 12) - 6, -6]}>
            <sphereGeometry args={[radius, 10, 10]} />
            <meshStandardMaterial color={pressed ? "red" : "blue"} />
          </mesh>
        ))}
        <Controls />
      </Canvas>
    </div>
  );
};
