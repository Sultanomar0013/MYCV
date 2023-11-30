import React from 'react';
import { motion } from 'framer-motion';

const ContinuousRotateAnimation = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
            }}
        >
            {/* Content of the rotating element */}
        </motion.div>
    );
};

export default ContinuousRotateAnimation;
