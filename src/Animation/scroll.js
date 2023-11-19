import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Scroll = ({ children }) => {
    const boxVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 0.5 }}
        >
            <h1>{ children } </h1>
        </motion.div>
    );
}

export default Scroll;