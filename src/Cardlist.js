import React from 'react';
import Card from './Card';
//import {robots} from './robots';



const Cardlist=({robots})=>{
	

	const CardlistArray=robots.map((email,id)=>
	{
      return <Card email={robots[id].email} name={robots[id].name}/>

	}
)
return(



    <div>
{CardlistArray}
	
	 </div>



	);



}
export default Cardlist;