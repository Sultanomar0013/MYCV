import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
    const controls = useAnimation();
    useEffect(() => {
        controls.start({ opacity: 1, y: 0 });
    }, [controls]);

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 1, delay:0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;