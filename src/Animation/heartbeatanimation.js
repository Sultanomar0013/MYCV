import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const HeartBeatAnimation = () => {
  const controls = useAnimation();

  const heartbeatAnimation = {
    scale: [1, 1.2, 1], // Keyframes for the scale property
    opacity: [1, 0.8, 1], // Keyframes for the opacity property
    transition: { duration: 0.6, ease: 'easeInOut' }, // Animation duration and easing function
  };

  const startHeartbeat = async () => {
    await controls.start(heartbeatAnimation);
    await controls.start({ scale: 1, opacity: 1 });
  };

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
      }}
      animate={controls}
      onClick={startHeartbeat}
    >
      {/* Content of the heart element */}
    </motion.div>
  );
};

export default HeartBeatAnimation;
