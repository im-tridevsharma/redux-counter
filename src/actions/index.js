export const incrementNum = (value) => {
  return {
    type: "INCREASE",
    payload: value,
  };
};

export const decrementNum = (value) => {
  return {
    type: "DECREASE",
    payload: value,
  };
};
