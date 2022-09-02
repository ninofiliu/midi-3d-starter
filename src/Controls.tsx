import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default () => {
  const controls = useRef<OrbitControls>();
  const { camera, gl } = useThree();
  useFrame(() => {
    if (!controls.current) return;
    controls.current.update();
  });
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
  );
};
