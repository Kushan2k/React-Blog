
const ACTION_TYPES = {
  ADD_POST: "ADD_POST",
  DELETE_POST: "DELETE_POST",
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER:"LOGOUT_USER",
}

function reducer(state, action) {
  
  switch (action.type) {
    case ACTION_TYPES.ADD_POST:
      return state
    
    case ACTION_TYPES.LOGIN_USER:
      return {...state.posts,user:action.payload.user}
    
    default:
      return state
  }
}

export {reducer,ACTION_TYPES}