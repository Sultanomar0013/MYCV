import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({ children, threshold = 0.5 }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const [inView, entry] = useInView({ threshold, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }else {
            controls.start({ opacity: 0, y: 100 });
        }
    }, [inView, controls]);

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;


