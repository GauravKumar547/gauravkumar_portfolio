import { motion } from "framer-motion";
type Props = {
    imgurl: string;
};

const PhotoSection = ({ imgurl }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.8,
                rotateY: -45
            }}
            viewport={{ once: true }}
            transition={{ 
                duration: 1.5, 
                delay: 0.2,
                ease: "easeInOut"
            }}
            whileInView={{ 
                opacity: 1,
                scale: 1,
                rotateY: 0
            }}
            whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 }
            }}
            className="group relative flex justify-center items-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
        >
            <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 animate-pulse delay-1000"></div>
                <div className="absolute inset-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse delay-2000"></div>
            </div>
            
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 shadow-2xl">
                <div className="w-full h-full rounded-full p-1 bg-gradient-to-r from-gray-900 to-black">
                    <div className="relative w-full h-full overflow-hidden rounded-full violet-gradient bg-blend-multiply">
                        <img 
                            src={imgurl} 
                            alt="Gaurav Kumar - Full Stack Developer" 
                            className="w-full h-full object-cover opacity-90 rounded-full transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" 
                        />
                        
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-300"></div>
                        <div className="absolute top-12 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-700"></div>
                        <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-500"></div>
                    </div>
                </div>
            </div>
            
            <motion.div 
                animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg opacity-70"
            ></motion.div>
            
            <motion.div 
                animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg opacity-70"
            ></motion.div>
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
        </motion.div>
    );
};

export default PhotoSection;
