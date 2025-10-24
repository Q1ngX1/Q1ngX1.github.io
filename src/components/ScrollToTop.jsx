import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // 只在笔记页面显示
    const isNotePage = location.pathname.startsWith("/note/");

    useEffect(() => {
        if (!isNotePage) {
            setIsVisible(false);
            return;
        }

        const toggleVisibility = () => {
            // 滚动超过 300px 时显示按钮
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [isNotePage]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!isNotePage || !isVisible) {
        return null;
    }

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Top"
        >
            ⬆️
        </button>
    );
}
