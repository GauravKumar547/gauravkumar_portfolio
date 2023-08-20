/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { introduction, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "react-responsive";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => {
    return (
        <Tilt className="sm:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-xl font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    const mobileView = useMediaQuery({
        query: "(min-width:640px) and (max-width: 880px)",
    });

    return (
        <>
            <motion.div variants={textVariant(0.2)}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
            </motion.div>
            <motion.p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                variants={fadeIn("", "", 0.1, 1)}>
                {introduction}
            </motion.p>
            <div
                className={`mt-20 flex ${
                    mobileView ? "max-w-[540px]" : "max-w-none"
                } mx-auto w-full flex-wrap gap-10`}>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
