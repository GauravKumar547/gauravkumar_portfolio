import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import FeedbackCard from "./canvas/helper_components/FeedbackCard";

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <div>
                    <p className={`${styles.sectionSubText}`}>What other say</p>
                    <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
                </div>
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
