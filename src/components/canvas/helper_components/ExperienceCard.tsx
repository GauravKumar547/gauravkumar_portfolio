import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }: { experience: any }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ 
                background: "linear-gradient(135deg, #1d1836 0%, #232631 100%)", 
                color: "#fff",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(139, 92, 246, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ 
                background: experience.iconBg,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-4/5 h-3/5 object-contain hover:scale-110 transition-transform duration-300"
                    />
                </div>
            }
        >
            <div className="group">
                <h3 className="text-white text-2xl font-bold group-hover:text-violet-300 transition-colors duration-200">
                    {experience.title}
                </h3>
                <p className="text-secondary text-base font-semibold mt-1 group-hover:text-violet-400 transition-colors duration-200" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>
            
            <ul className="mt-5 list-none ml-0 space-y-3">
                {experience.points.map((point: string, index: number) => (
                    <li
                        key={"experience-point-" + index}
                        className="text-white-100 text-sm pl-4 tracking-wider relative before:content-['▶'] before:absolute before:left-0 before:text-violet-400 before:text-xs hover:text-violet-100 transition-colors duration-200"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};
export default ExperienceCard;
