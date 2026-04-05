import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 240); // show after 240px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!show) return null;
    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-neutral-8 backdrop-blur-lg size-12 cursor-pointer text-white p-3 rounded-full"
                >
                    <ArrowUp className='text-background size-5' />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTop