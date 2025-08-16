import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

type SkillCardProps = {
    name: string;
    icon: string;
    index: number;
};

const SkillCard = ({ name, icon, index }: SkillCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.02, 0.3)}
            className="bg-tertiary p-3 rounded-xl shadow-card hover:shadow-xl hover:scale-105 transition-all duration-200 group cursor-pointer flex flex-col items-center gap-2 min-w-[120px] h-[100px] justify-center border border-transparent hover:border-violet-500/20"
        >
            <div className="w-10 h-10 flex items-center justify-center">
                <img 
                    src={icon} 
                    alt={name}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                />
            </div>
            <h3 className="text-white text-xs font-medium text-center leading-tight group-hover:text-violet-300 transition-colors duration-200">{name}</h3>
        </motion.div>
    );
};

const Tech = () => {
    // Group technologies by category
    const groupedTechnologies = technologies.reduce((acc, tech) => {
        const category = tech.category || "Other";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(tech);
        return acc;
    }, {} as Record<string, typeof technologies>);

    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={`${styles.sectionSubText}`}>My Technical Expertise</p>
                <h2 className={`${styles.sectionHeadText}`}>Skills & Technologies.</h2>
            </motion.div>

            <div className="mt-6 space-y-4">
                {Object.entries(groupedTechnologies).map(([category, techs], categoryIndex) => (
                    <motion.div 
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.05, duration: 0.4 }}
                        className="space-y-2"
                    >
                        <h3 className="text-white text-lg font-bold text-center md:text-left bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                            {category}
                        </h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {techs.map((technology, index) => (
                                <SkillCard
                                    key={technology.name}
                                    index={index}
                                    name={technology.name}
                                    icon={technology.icon}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-8 p-4 bg-black-100 rounded-xl border border-violet-500/10"
            >
                <h3 className="text-white text-lg font-semibold mb-3 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Core Competencies</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {[
                        "Microservices Architecture", "System Design", "Performance Optimization", 
                        "CI/CD Pipelines", "Agile Development", "Test-Driven Development", 
                        "RESTful APIs", "Event-Driven Architecture", "Cloud Native Development"
                    ].map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03, duration: 0.3 }}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:scale-105 transition-transform duration-200 cursor-default shadow-lg"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
