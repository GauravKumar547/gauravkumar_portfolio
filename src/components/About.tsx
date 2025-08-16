/* eslint-disable react-refresh/only-export-components */
import { styles } from "../style";
import { introduction, services } from "../constants";
import { useMediaQuery } from "react-responsive";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./canvas/helper_components/ServiceCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    const mobileView = useMediaQuery({
        query: "(min-width:640px) and (max-width: 880px)",
    });

    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
            </motion.div>
            
            <motion.p 
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
            >
                {introduction}
            </motion.p>
            
            <motion.div
                variants={fadeIn("up", "", 0.15, 0.4)}
                className={`mt-8 flex ${
                    mobileView ? "max-w-[540px]" : "max-w-none"
                } mx-auto w-full flex-wrap justify-start gap-4`}
            >
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </motion.div>
            
            <motion.div 
                variants={fadeIn("up", "", 0.3, 0.6)}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
                <div className="text-center p-6 bg-tertiary rounded-xl hover:bg-black-200 transition-all duration-300 shadow-card">
                    <h3 className="text-white text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">3+</h3>
                    <p className="text-secondary text-sm mt-2">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-tertiary rounded-xl hover:bg-black-200 transition-all duration-300 shadow-card">
                    <h3 className="text-white text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">3</h3>
                    <p className="text-secondary text-sm mt-2">Companies Served</p>
                </div>
                <div className="text-center p-6 bg-tertiary rounded-xl hover:bg-black-200 transition-all duration-300 shadow-card">
                    <h3 className="text-white text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">99%</h3>
                    <p className="text-secondary text-sm mt-2">Code Quality</p>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(About, "about");
