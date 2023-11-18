// FadeOnScroll.js
import React from 'react';
import { Fade } from 'react-reveal';
import { useInView } from 'react-intersection-observer';

const FadeOnScroll = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Set to false to trigger on each scroll
    });

    return (
        <div ref={ref}>
            <Fade when={inView }>{children}</Fade>
        </div>
    );
};

export default FadeOnScroll;
