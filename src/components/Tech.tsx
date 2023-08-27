import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

type Props = {
    icon: string;
    directionLeft?: boolean;
    proficiency: string;
};

const Skill = ({ icon, directionLeft, proficiency }: Props) => {
    return (
        <motion.div
            initial={{
                x: directionLeft ? -150 : 150,
                opacity: 0,
            }}
            transition={{ duration: 0.8, delay: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex sm:w-28 group shadow-card sm:h-28 h-20 w-20 rounded-full overflow-hidden cursor-pointer">
            <div className="p-2 flex justify-center items-center w-full h-full violet-gradient filter group-hover:invert transition duration-300 ease-in-out">
                <img src={icon} className="object-cover" />
            </div>
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 sm:w-28 sm:h-28 h-20 w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-[#612dd3] opacity-100">{proficiency}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant(0.2)}>
                <p className={`${styles.sectionSubText}`}>Tech I worked in</p>
                <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
            </motion.div>
            <div className="pt-8 flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology, index) => (
                    <div key={"technology" + technology.name} className="w-28 h-28">
                        <Skill
                            icon={technology.icon}
                            proficiency={technology.proficiency}
                            directionLeft={index % 2 === 0}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
