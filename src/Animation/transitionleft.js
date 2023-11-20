import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Left = ({ children }) => {
    const boxVariant = {
        hidden: { opacity: -2, x: -100 },
        visible: { opacity: 1, x: 0 },
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
            
            
            style={{ }}
        >
            <div> { children } </div>
        </motion.div>
    );
}

export default Left;