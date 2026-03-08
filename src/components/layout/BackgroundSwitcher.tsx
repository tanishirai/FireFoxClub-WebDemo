"use client";

import { useEffect, useRef } from "react";

export default function BackgroundSwitcher() {
    const isMovingRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = () => {
            // Immediately show Background2.jpg without state update (uses ref)
            if (!isMovingRef.current) {
                isMovingRef.current = true;
                if (containerRef.current) {
                    containerRef.current.dataset.moving = "true";
                }
            }

            // Clear existing timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // After 300ms of no movement, switch back to Background.jpg
            timeoutRef.current = setTimeout(() => {
                isMovingRef.current = false;
                if (containerRef.current) {
                    containerRef.current.dataset.moving = "false";
                }
            }, 300);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
            data-moving="false"
        >
            {/* Base layer – Background.jpg (default) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/Background.jpg')",
                    opacity: "var(--bg1-opacity, 1)",
                    transition: "opacity 150ms ease-out",
                }}
            />
            {/* Overlay layer – Background2.jpg (shows when cursor moves) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/Background2.jpg')",
                    opacity: "var(--bg2-opacity, 0)",
                    transition: "opacity 150ms ease-out",
                }}
            />

            <style>{`
                [data-moving="true"] {
                    --bg1-opacity: 0;
                    --bg2-opacity: 1;
                }
                [data-moving="false"] {
                    --bg1-opacity: 1;
                    --bg2-opacity: 0;
                }
            `}</style>
        </div>
    );
}
