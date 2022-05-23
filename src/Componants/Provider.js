import { useReducer } from "react";
import { createContext } from "react";
import { reducer} from "./Reducer";

const Context = createContext()

const init_state = {
  posts: [1,2,3,4,5,6],
  user:null,
}


export default function Provider(props) {
  
  const [state, dispatch] = useReducer(reducer, init_state);

  return (
    <Context.Provider value={{ data: state, actionDispatch: dispatch }}>
      {props.children}
    </Context.Provider>
  )
}

export {Context}
