// import { useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import { random } from "maath";
import { starsgif } from "../../assets";
// const Stars = (props: any) => {
//     const ref = useRef<any>(null);
//     useFrame((_state, delta) => {
//         if (ref.current !== null) {
//             ref.current.rotation.x -= delta / 10;
//             ref.current.rotation.y -= delta / 15;
//         }
//     });
//     const sphere = random.inSphere(new Float32Array(1500), { radius: 1.2 });
//     return (
//         <group rotation={[0, 0, Math.PI / 4]}>
//             <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//                 <PointMaterial
//                     transparent
//                     color="#f272c8"
//                     size={0.002}
//                     sizeAttenuation={true}
//                     depthWrite={false}
//                 />
//             </Points>
//         </group>
//     );
// };
const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 overflow-hidden z-[-1]">
            {/* <Canvas gl={{ powerPreference: "high-performance" }} camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas> */}
            <img className="w-full h-full object-cover -scale-x-100" src={starsgif} alt="" />
        </div>
    );
};

export default StarsCanvas;
