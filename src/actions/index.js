export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const reset = () => {
  return {
    type: 'RESET'
  };
};

export const login = () => {
  console.log("type is logged ")
  return {
    type: 'LOGGED'
  };
};

export const logOut = () => {
  return {
    type: 'LOGOUT'
  };
};
