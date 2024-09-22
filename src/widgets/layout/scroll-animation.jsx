import React from "react";
import { useInView } from "react-intersection-observer";

export function ScrollAnimation({ children }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true, // This allows the animation to trigger multiple times
    });

    return (
        <div
            ref={ref}
            className={`transition-transform duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
