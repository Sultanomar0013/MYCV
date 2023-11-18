import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ children, width = "fit-content" }) => {
    
        const ref = useRef(null);
        const isInView = useInView({ ref, triggerOnce: true });
        const controls = useAnimation();

    useEffect(() => {
        console.log("isInView:", isInView);
        if(isInView){
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                hidden:{ opacity:0, y:75},
                visible:{opacity:1,y:0 }
            }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay:0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;

