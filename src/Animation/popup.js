import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Popup = ({ children }) => {
    const popupVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="popup-container"
            ref={ref}
            variants={popupVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 0.5 }}
            style={{ height:'100%', width:'100%'}}
        >
            {children}
        </motion.div>
    );
};

export default Popup;