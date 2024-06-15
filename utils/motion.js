export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const fade = (duration, delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

export const headerLinksVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

export const socialVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

export const navContainer = {
  visible: {
    //x: 0,
    opacity: 1,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
  hidden: {
    //x: -250,
    opacity: 0,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
};
export const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};
