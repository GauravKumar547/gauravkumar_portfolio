import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => {
    return (
        <Tilt className="sm:w-[200px] w-full" options={{ max: 35, scale: 1, speed: 400 }}>
            <motion.div
                variants={fadeIn("right", "spring", 0.1 * index, 0.4)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl transition-all duration-200 group"
            >
                <div className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[180px] flex justify-evenly items-center flex-col hover:bg-black-200 transition-all duration-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <img src={icon} alt={title} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-200 relative z-10" />
                    <h3 className="text-white text-lg font-bold text-center leading-tight group-hover:text-violet-300 transition-colors duration-200 relative z-10">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ServiceCard;
