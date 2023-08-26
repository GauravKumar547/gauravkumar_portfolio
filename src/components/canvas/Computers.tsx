import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader";
import { useMediaQuery } from "react-responsive";
const Computers = () => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    const desktopView = useMediaQuery({
        query: "(min-width:640px)",
    });
    return (
        <mesh>
            <hemisphereLight intensity={2.5} groundColor="black" />
            <pointLight intensity={15} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={15000}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={desktopView ? 0.75 : 0.65}
                position={desktopView ? [0, -3.25, -1.5] : [-0.5, -3, -2.2]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default ComputersCanvas;
