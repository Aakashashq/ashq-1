import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary text-white"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-secondary">
                ASHQ
              </h1>
            </motion.div>
            
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-0.5 bg-secondary w-32"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm font-sans tracking-widest text-secondary/80 uppercase"
            >
              Mumbai, India
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
