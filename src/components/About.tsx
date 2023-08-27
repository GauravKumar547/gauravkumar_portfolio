/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../style";
import { introduction, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "react-responsive";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./canvas/helper_components/ServiceCard";

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
