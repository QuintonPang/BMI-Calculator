import React,{useState} from "react";

const Increment=()=>{

	const [count,setCount]=useState(0);

	const divide=()=>{
 		setCount(count/10);
	};


	return(
	<React.Fragment>
		<h2>Count is{count}</h2>
		<button onClick={()=>setCount(count+1)}>Press to add 1></button>
		<button onClick={()=>setCount(count-1)}>
Press to minus 1></button>
		<button onClick={divide}>Divide by 10</button>
		</React.Fragment>

	);
}


export default Increment;
