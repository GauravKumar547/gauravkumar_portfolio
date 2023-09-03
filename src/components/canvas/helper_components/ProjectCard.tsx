import { github, redirect } from "../../../assets";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
}: {
    index: number;
    name: string;
    description: string;
    tags: any[];
    image: string;
    source_code_link: string;
    live_link: string;
}) => (
    <motion.div
        initial={{
            opacity: 0,
        }}
        transition={{ duration: 0.8, delay: 0.5 * index }}
        whileInView={{ opacity: 1 }}>
        <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary p-5 rounded-2xl md:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 flex flex-col items-end justify-between gap-2 m-3 card-img_hover">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                    </div>
                    <div
                        onClick={() => window.open(live_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <img
                            src={redirect}
                            alt="github"
                            className="w-1/2 h-1/2 object-contain invert"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-white font-bold text-2xl">{name}</h3>
                <p className="mt-2 text-secondary text-sm">{description}</p>
            </div>

            <div className=" mt-4 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <p key={"tag" + tag.name + idx} className={`text-sm ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    </motion.div>
);

export default ProjectCard;
