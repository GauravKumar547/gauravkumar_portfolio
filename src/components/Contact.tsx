/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from ".";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (!form.email || !form.name || !form.message) {
            toast.warn("Please enter all details");
        } else {
            emailjs
                .send(
                    "service_fe3cl3s",
                    "template_95q7uve",
                    {
                        from_name: form.name,
                        to_name: "Gaurav Kumar",
                        from_email: form.email,
                        to_email: "gauravkumar.dev0@gmail.com",
                        message: form.message,
                    },
                    "u7ydzci6rW3BGbjPZ"
                )
                .then(
                    () => {
                        setLoading(false);
                        alert("Thank you. I will get back to you as soon as possible");
                    },
                    (error) => {
                        setLoading(false);
                        console.log(error);
                        alert("Something went wrong");
                    }
                );
        }
    };
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <div className="flex-[0.75] bg-black-100 rounded-2xl p-8 bg-opacity-90">
                <p className={`${styles.sectionSubText}`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
                
                {/* Social Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                    <a 
                        href="mailto:gauravkumar.dev0@gmail.com"
                        className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg hover:bg-violet-gradient transition-all group text-sm"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-secondary group-hover:text-white">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span className="text-secondary group-hover:text-white">Email</span>
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/gauravkumar000701/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg hover:bg-blue-600 transition-all group text-sm"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-secondary group-hover:text-white">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-secondary group-hover:text-white">LinkedIn</span>
                    </a>
                    
                    <a 
                        href="https://github.com/GauravKumar547" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg hover:bg-gray-700 transition-all group text-sm"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-secondary group-hover:text-white">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-secondary group-hover:text-white">GitHub</span>
                    </a>
                    
                    <a 
                        href="https://www.scaler.com/academy/profile/22362095afa9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg hover:bg-green-600 transition-all group text-sm"
                    >
                        <span className="text-secondary group-hover:text-white font-semibold">Scaler</span>
                    </a>
                </div>
                
                <form
                    action=""
                    onSubmit={handleSubmit}
                    ref={formRef}
                    className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col" htmlFor="">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col" htmlFor="">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col" htmlFor="">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 resize-none placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        type="submit">
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
