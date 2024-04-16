const createMask = (value: string) => {
  // Dynamically adjust the mask based on the input
  const mask = [
    "+",
    "7",
    " ",
    "(", // Static part of the mask
    /\d/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ].filter((part) => part !== null); // Remove nulls (optional parts not needed)

  return mask;
};

export default createMask;
