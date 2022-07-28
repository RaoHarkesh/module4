import { useDispatch, useSelector } from "react-redux";

import { incrementCounter } from "./redux/action";

function App() {
  let state = useSelector(function(state){
    return state;
  });

  let dispatch = useDispatch();
  return (
<>
    <h1>{state}</h1>
    <button
    onClick={()=>{
      dispatch(incrementCounter())
    }}
    >+</button>
</>
  );
}

export default App;
