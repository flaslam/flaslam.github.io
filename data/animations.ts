export const pageDefault = {
  hidden: {
    opacity: 0,
    // translateY: -75,
    transition: { ease: "easeInOut", duration: 0.25 },
  },
  show: {
    opacity: 1,
    // translateY: 0,
    transition: { ease: "easeInOut", duration: 0.25 },
  },
};

export const containerDefault = {
  hidden: {
    opacity: 0,
    // translateY: -75
  },
  show: {
    opacity: 1,
    // translateY: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

export const staggerParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, translateY: -75 },
  show: { opacity: 1, translateY: 0 },
};
