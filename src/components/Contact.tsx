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
                        to_email: "gauravkhanna547@gmail.com",
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
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 rounded-2xl p-8">
                <p className={`${styles.sectionSubText}`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
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
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
