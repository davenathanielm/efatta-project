import {motion, useInView, useAnimation} from 'framer-motion';
import {useEffect, useRef} from 'react';

export default function Animation({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true});
    const animation = useAnimation();   

    useEffect(() => {
        if(isInView){
            animation.start("visible");
        }
    },[isInView]);//runs whenever isInView value changes
    return(
        <div ref={ref}>
            <motion.div
                variants={{ 
                    hidden : {opacity: 0},
                    visible : {opacity: 1 , transition: {staggerChildren: 0.2}},
                }}
                initial="hidden"
                animate={animation}
                transition={{duration: 1 , delay : 0.5}}
            >
                {children}
            </motion.div>
        </div>
    );
};