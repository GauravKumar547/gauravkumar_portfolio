import { github, redirect } from "../../../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    source_code_link2,
    live_link,
}: {
    index: number;
    name: string;
    description: string;
    tags: any[];
    image: string;
    source_code_link: string;
    source_code_link2?: string;
    live_link?: string;
}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.4)}
        className="group"
    >
        <div
            className="bg-tertiary p-5 rounded-2xl md:w-[360px] w-full min-h-[580px] shadow-card hover:shadow-2xl transition-all duration-200 relative overflow-hidden flex flex-col"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            <div className="relative w-full h-[220px] overflow-hidden rounded-2xl flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-end justify-start gap-2 m-3 card-img_hover">
                    <div
                        title={source_code_link2 ? "View Frontend Source" : "View Source"}
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 bg-gradient-to-br from-gray-800 to-black border border-gray-600 hover:border-violet-400"
                    >
                        <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                    </div>
                    
                    {source_code_link2 && (
                        <div
                            title="View Backend Source"
                            onClick={() => window.open(source_code_link2, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 bg-gradient-to-br from-gray-800 to-black border border-gray-600 hover:border-violet-400"
                        >
                            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    )}
                    
                    {live_link && (
                        <div
                            title="View Live"
                            onClick={() => window.open(live_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 bg-gradient-to-br from-gray-800 to-black border border-gray-600 hover:border-violet-400"
                        >
                            <img
                                src={redirect}
                                alt="live link"
                                className="w-1/2 h-1/2 object-contain invert"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-4 relative z-10 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-white font-bold text-xl group-hover:text-violet-300 transition-colors duration-200 line-clamp-2">
                        {name}
                    </h3>
                    <p className="mt-2 text-secondary text-sm leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                    {tags.map((tag, idx) => (
                        <p
                            key={"tag" + tag.name + idx}
                            className={`text-xs ${tag.color} bg-black/20 px-2 py-1 rounded-lg backdrop-blur-sm border border-gray-600/30 flex-shrink-0`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export default ProjectCard;
