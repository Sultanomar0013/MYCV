import React from 'react';
import { motion } from 'framer-motion';

const OnClickRotate = () => {
    const [rotate, setRotate] = React.useState(false);
    return (
        <motion.div
            animate={{ rotate: rotate ? 360 : 0 }}
            onClick={() => {
                setRotate(!rotate);
            }} >
                
        </motion.div>
    );
};

export default OnClickRotate;