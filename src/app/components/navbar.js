'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {DropDownMenu} from "./dropdown";
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function navbar() {
 return (
    <div className="text-right mr-7 mt-8 lg:hidden">
      <AnimatedHamburgerMenu />
    </div>
  );
};

const AnimatedHamburgerMenu = () => {
    const[active, setActive] = useState(false);
    const handleToggle = () =>{
        setActive((previous) => !previous);
        console.log(active);
    }
  // Ensure this component returns some JSX
  return (
    <MotionConfig
        transition={{ 
            duration: 0.5, 
            ease : "easeInOut"
        }}
    >    
    <div className="relative">
        <motion.button 
            onClick={handleToggle}
            animate={active ? "open" : "closed"}
            initial= { false }
            className="relative h-12 w-12 rounded-full bg-gray-700 hover:bg-white/70">
            
            <motion.span 
                style={{ 
                        top: "35%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                variants={{ 
                    open : {
                        rotate: ["0deg","45deg"],
                        top: ["35%","35%","50%"],
                    },
                    closed : {
                        rotate: ["45deg","0deg"],
                        top: ["50%","50%","35%"],   
                    },
                 }}
                className="absolute h-1 w-5 bg-white rounded-xl">
            </motion.span>

            <motion.span 
                style={{ 
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    
                }}
                variants={{ 
                    open : {
                        rotate: ["0deg","0deg","-45deg"],
                    },
                    closed : {
                        rotate: ["-45deg","-45deg","0deg"],
                    },
                 }}
                className="absolute h-1 w-5 bg-white rounded-xl">
            </motion.span>
            
            <motion.span 
                style={{ 
                    top: "60%",
                    left: "50%",
                    x: "-50%",
                }}
               variants={{ 
                    open : {
                        rotate: ["0deg","0deg","-45deg"],
                        opacity: [1,0]
                    },
                    closed : {
                        rotate: ["-45deg","-45deg","0deg"],
                        opacity: [0,1]
                    },
                 }}
                className="absolute h-1 w-3 bg-white rounded-xl">
            </motion.span>
            {active && <DropDownMenu handleToggle={handleToggle}/>}
        </motion.button>
    </div>
    </MotionConfig>
  );
};

