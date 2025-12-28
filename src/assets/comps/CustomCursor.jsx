import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setCursorVariant("pointer");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, []);

    const variants = {
        default: {
            height: 12,
            width: 12,
            backgroundColor: "rgba(255, 255, 255, 1)",
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            transition: { type: "spring", mass: 0.1 }
        },
        pointer: {
            height: 48,
            width: 48,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            transition: { type: "spring", mass: 0.1 }
        }
    };

    const ringVariants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 0.4
        },
        pointer: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 0,
            opacity: 0
        }
    };

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
                variants={variants}
                animate={cursorVariant}
            />
            
            {/* Outer Ring with Lag */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={ringVariants}
                animate={cursorVariant}
            />
        </>
    );
};
