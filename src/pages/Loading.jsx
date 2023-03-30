import React from 'react'
import { motion } from "framer-motion"
import "../Style/loading.css"
const loadingContainer = {
    width: "16%",
    height: "2rem",
    display: "flex",
    justifyContent: "space-around"

}
const loadingCircle = {
    display: "block",
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "grey",
    borderRadius: "0.25rem"
}
const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
}
const loadingCircleVariants = {
    hidden: {
        opacity: 0,
    },
    start: {
        y: '0%',
        opacity: 1,
    },
    end: {
        y: '100%',
        opacity: 1,
    }
}
const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut',
    repeatDelay: 0.2,
    loop:true
}
const Loading = () => {
    return (
        <motion.div style={loadingContainer} className="loadingContainer"
            initial="start"
            animate="end"
            variants={loadingContainerVariants}
        >
            <motion.span style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}


            />
            <motion.span style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}

            />
            <motion.span style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <motion.span style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <motion.span style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
        </motion.div>
    )
}

export default Loading