// src/components/MotionWrapper.jsx
import { motion } from "framer-motion";

const MotionWrapper = ({ title, subtitle, children  }) => (
    <motion.div
        className="min-h-screen p-6 bg-mainBg text-textPrimary flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
    >

        {title && (
            <motion.h1
                className="text-5xl font-bold text-accent mb-6 text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {title}
            </motion.h1>
        )}
        {subtitle && (
            <motion.p
                className="text-lg text-textSecondary text-center mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {subtitle}
            </motion.p>
        )}
        {children}
    </motion.div>
);

export default MotionWrapper;
