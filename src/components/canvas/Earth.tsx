import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import Loader from "../Loader";
import { useMediaQuery } from "react-responsive";
const Earth = () => {
    const desktopView = useMediaQuery({
        query: "(min-width:640px)",
    });
    const earth = useGLTF("./planet/scene.gltf");
    return (
        <primitive
            object={earth.scene}
            scale={desktopView ? 2.5 : 3}
            position-y={0}
            position-x={0}
        />
    );
};
const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ powerPreference: "high-performance" }}
            camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default EarthCanvas;
