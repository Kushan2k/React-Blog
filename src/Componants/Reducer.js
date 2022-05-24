

const ACTION_TYPES = {
  ADD_POST: "ADD_POST",
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  LOAD_POST:"LOAD_POST",
}

function reducer(state, action) {
  
  switch (action.type) {
    case ACTION_TYPES.LOAD_POST:
      return (
        {
          ...state,
          posts: action.payload.posts,
          
        }
      )
    
    case ACTION_TYPES.LOGIN_USER:
      return {
        posts: state.posts,
        user: action.payload.user
      }
    case ACTION_TYPES.LOGOUT_USER:
      return {
        posts: state.posts,
        user: null,
      }
    
    default:
      return state
  }
}



export {reducer,ACTION_TYPES}