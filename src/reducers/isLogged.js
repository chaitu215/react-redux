const loggedReducer = (state = false, action) => {
  switch(action.type) {
    case 'LOGGED':
      console.log('is logged')
      return true;
    case 'LOGOUT':
      return false;  
    default:
      return false;
  }
};

export default loggedReducer;
