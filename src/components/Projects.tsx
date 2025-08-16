/* eslint-disable react-refresh/only-export-components */
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCard from "./canvas/helper_components/ProjectCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
    return (
        <div className="relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none"></div>
            
            <motion.div variants={textVariant(0.1)} className="relative z-10">
                <p className={`${styles.sectionSubText} text-center`}>My work</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Featured <span className="text-violet-400">Projects</span>
                </h2>
            </motion.div>
            
            <motion.div 
                variants={fadeIn("", "", 0.05, 0.4)}
                className="w-full flex justify-center relative z-10"
            >
                <p className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px] text-center">
                    These projects showcase my expertise in building enterprise-level applications 
                    with modern technologies. Each project demonstrates scalability, performance 
                    optimization, and real-world impact, reflecting my ability to architect 
                    complex systems and deliver results that serve thousands of users.
                </p>
            </motion.div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={"project" + index}
                        variants={fadeIn("up", "spring", index * 0.1, 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <ProjectCard {...project} index={index} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Works, "projects");
