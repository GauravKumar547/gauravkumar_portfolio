/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import ExperienceCard from "./canvas/helper_components/ExperienceCard";

const Experience = () => {
    return (
        <>
            <div>
                <p className={`${styles.sectionSubText}`}>What i have done so far</p>
                <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
            </div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={"experience" + index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
