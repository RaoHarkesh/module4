import { useDispatch, useSelector } from "react-redux";

import { decrementCounter, incrementCounter, loginCreator, logoutCreator } from "./redux/action";

function App() {
  let countState = useSelector(function(state){
    return state.count;
  });

  let loggedState = useSelector(function(state){
    return state.logged;
  })

  let dispatch = useDispatch();
  return (
<>
    {loggedState?<h2>login</h2>:<h2>logout</h2>}
    <button onClick={()=>{ dispatch(loginCreator())}}>login</button>
    <button onClick={()=>{ dispatch(logoutCreator()) }}>logout</button>
    <h1>{countState}</h1>
    <button
    onClick={()=>{dispatch(incrementCounter())}}>+</button>
    <button onClick={()=>{dispatch(decrementCounter()) }}>-</button>
</>
  );
}

export default App;
