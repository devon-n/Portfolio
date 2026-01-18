import { Variants } from "framer-motion"

export const fadeIn: Variants = {
    initial: {
        opacity: 0,
        scale: 0.98
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: {
        opacity: 1,
        y: 0
    }
}


export const stagger: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

export const routeAnimation: Variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: "easeInOut"
        }
    }
}

export const barWidthVariants: Variants = {
    initial: {
        width: 0
    },
    animate: {
        width: "100%",
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}