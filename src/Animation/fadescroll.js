import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Fade = ({ children }) => {
    const boxVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
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
            className="box" // You can replace this class with your styling
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 1 }}
        >
            <div>{children}</div>
        </motion.div>
    );
};

export default Fade;
