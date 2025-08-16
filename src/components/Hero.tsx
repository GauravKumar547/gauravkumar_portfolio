import { motion } from "framer-motion";
import { styles } from "../style";
import { myimg } from "../assets";
import PhotoSection from "./canvas/helper_components/PhotoSection";

const Hero = () => {
    return (
        <section className="relative w-full h-auto pt-16 pb-0 lg:pt-36 mx-auto">
            <div
                className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-12`}
            >
                {/* Text content */}
                <div className="flex flex-row items-start gap-5 lg:flex-1 min-w-0">
                    <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                        <div className="w-1 lg:h-80 h-40 violet-gradient" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="min-w-0"
                    >
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className="text-[#915eff]">Gaurav</span>
                        </h1>
                        <motion.p 
                            className={`${styles.heroSubText} mt-2 text-white-100`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            I architect scalable cloud solutions,&nbsp;
                            <br className="sm:hidden block" />
                            AI-powered applications and enterprise systems
                        </motion.p>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="flex-shrink-0 mt-8 lg:mt-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <PhotoSection imgurl={myimg} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
