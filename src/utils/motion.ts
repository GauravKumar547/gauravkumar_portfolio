export const textVariant = (delay: number) => {
    return {
        hidden: {
            y: -30,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
        hidden: {
            x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
            y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: Math.min(duration, 0.6),
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const zoomIn = (delay: number, duration: number) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const staggerContainer = (
    staggerChildren: number | undefined,
    delayChildren: number | undefined
) => {
    return {
        hidden: {},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};
