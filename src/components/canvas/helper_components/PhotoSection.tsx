import { motion } from "framer-motion";
type Props = {
    imgurl: string;
};

const PhotoSection = ({ imgurl }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            transition={{ duration: 1.2, delay: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center h-full max-h-96 md:max-h-[28rem] lg:max-h-[32rem] pt-2 violet-gradient rounded-t-full bg-blend-multiply items-center box-content">
            <img src={imgurl} alt="my image" className="w-full opacity-80 h-full rounded-b-full " />
        </motion.div>
    );
};

export default PhotoSection;
