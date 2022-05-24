
import { useReducer ,createContext} from "react";
import { reducer} from "./Reducer";

const Context = createContext()

const init_state = {
  posts:[],
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
