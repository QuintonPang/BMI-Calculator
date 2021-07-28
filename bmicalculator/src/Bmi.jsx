import React,{useState} from "react";

const Bmi=()=>{

	const [height,setHeight]=useState(1);
	const [weight,setWeight]=useState(0);
	const [bmi, setBmi]=useState(0);

	const[showBmi,setShowBmi]=useState(false);
	
      if(	height<0  )setHeight(0);
      if (	weight<0 ) setWeight(0);

	const add001=()=>{

		                setHeight(height+0.01);

		        };

	const add01=()=>{

		setHeight(height+0.1);

	};

	const add1=()=>{
		                                                                    
		setHeight(height+1);             
	};

	const add10=()=>{
		
		setHeight(height+10);             
	};


	const minus001=()=>{

		setHeight(height-0.01);

		        };

	const minus01=()=>{
		                  
		setHeight(height-0.1);      
	};

	const  minus1=()=>{
		                                     
		setHeight(height-1);    
	};

	const minus10=()=>{
		                          
		setHeight(height-10);  
	};

	const weightadd01=()=>{

		setWeight(weight+0.1);
	};
	const weightadd1=()=>{                                                                                    	 setWeight(weight+1);
	};
	                               
	const weightadd10=()=>{
									                                	       setWeight(weight+10);
								                                                                            
	};

	const weightminus01=()=>{

		setWeight(weight-0.1);
		                };
	const  weightminus1=()=>{

		  setWeight(weight-1);
		              };

	const weightminus10=()=>{
	      setWeight(weight-10);
		            };



	return(

		  <React.Fragment>
		                                                                                                                                                                                      


	<h2>Height is(metre):{Math.round(height*100)/100}</h2>
		 <h2>Weight is(kg):{Math.round(weight*10)/10}</h2>



		        <h3>Height:</h3>

			<button onClick={add001}>Add 0.01</button>

		       <button onClick={add01}>Add 0.1</button>
		        <button onClick={add1}> Add 1</button>

			<button onClick={minus001}>Minus 0.01</button>

		         <button onClick={minus01}>Minus 0.1</button>
		        <button onClick={minus1}>Minus 1</button>
		<br/>
		        <h3>Weight:</h3>


		        <button onClick={weightadd01}>Add 0.1</button>
		        <button onClick={weightadd1}> Add 1</button>
		         <button onClick={weightadd10}>Add 10</button>                                                                                                                           
		        <button onClick={weightminus01}>Minus 0.1</button>
		        <button onClick={weightminus1}>Minus 1</button>
		        <button onClick={weightminus10}>Minus 10</button>



<br/>

		        <button onClick={()=>{


				                setHeight(0);
				                setWeight(0);
				                setBmi(0);
						setShowBmi(false);



	
			}}>Reset</button>


		

		        <button onClick={()=>{


				setShowBmi(true);
				setBmi(weight/(height*height))

			}}>Calculate BMI!</button>



	{showBmi==true&&  (

			       <h5>YOUR BMI: {Math.round(bmi*10)/10}</h5>)

		}
		        </React.Fragment>
	);

}

export default Bmi;

