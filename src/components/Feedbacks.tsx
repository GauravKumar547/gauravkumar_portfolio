import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}: {
    index: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}) => (
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
const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <motion.div variants={textVariant(0.2)}>
                    <p className={`${styles.sectionSubText}`}>What other say</p>
                    <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
                </motion.div>
            </div>
            <div className={`${styles.padding} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={"feedback" + testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
