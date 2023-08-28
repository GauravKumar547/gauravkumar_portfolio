import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
type Props = {
    index: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
};

const FeedbackCard = ({ index, testimonial, name, designation, company, image }: Props) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl md:w-80  w-full">
        <p className="text-white font-black text-5xl">"</p>
        <p className="text-white tracking-wider text-lg">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-base">
                    <span className="blue-text-gradient">@</span> {name}
                </p>
                <p className="mt-1 text-secondary text-xs">
                    {designation} of {company}
                </p>
            </div>
            <div>
                <img
                    src={image}
                    alt={`feedback-by-${name}`}
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
        </div>
    </motion.div>
);

export default FeedbackCard;
