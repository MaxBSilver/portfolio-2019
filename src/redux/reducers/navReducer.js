export const navReducer = (state = '', action) => {
  switch (action.type) {
    case 'Nav':
      return { ...action};
    default: 
      return state;
  }
}