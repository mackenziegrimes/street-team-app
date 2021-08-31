import React,{createContext,useReducer,useState}  from 'react';
// This context function is modeled after this "counter" function https://stackoverflow.com/questions/65444681
// eventually we might start using redux, but for now this is our simplified version of global state

export  const totalPointsContext=createContext({});
function TotalPointsContext(props){
    const [count, setCount] = useState(0);

    const reducer = (intitalState, action) => {
        console.log('I am here');
        if(action.type === 'Increment') {
            console.log('I am in Increment');
       return intitalState+action.amount;
        }
        if(action.type === 'Decrement') {
            return intitalState-action.amount;
             }
      }
  
      const [newState, dispatch] = useReducer(reducer, count);

      return (
        <totalPointsContext.Provider value={{newState,dispatch}}>
            {props.children}
        </totalPointsContext.Provider>
      );
}
export default React.memo(TotalPointsContext);