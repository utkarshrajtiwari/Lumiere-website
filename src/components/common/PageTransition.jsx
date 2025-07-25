import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      y: 0,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;