/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Component: JSX.ElementType, idName: string) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer(0, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 py-8 sm:py-10`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
