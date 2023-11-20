import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Scrolldown = ({ children }) => {
    const scrollVariant = {
        hidden: { opacity: -2, y: -100, },
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
            className="scroll-container"
            ref={ref}
            variants={scrollVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 0.5 }}
            style={{ width:'100%', display:'flex', justifyContent:'center'}}
        >
            { children }
        </motion.div>
    );
}
export default Scrolldown;