import React,{Component} from 'react';
import Cardlist from './Cardlist'
import {robots} from './robots'
import Searchbox from './Searchbox'
//const state={robots: robots, searchfield:''}

class App extends Component
{
constructor() {



super()

this.state = {robots: robots, searchfield:'' }

}
onSearchChannge=(event)=> 
{
	  console.log(event);
	this.setState({searchfield: event.target.value})

	
	
}



render()
{  
	
const filterrobots=this.state.robots.filter(robots =>{return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});



return(
	<div className='tc'>


<h1 className='f2'>ROBOCONTACTS</h1>

<Searchbox Searchchange={this.onSearchChannge}/>


<Cardlist robots={filterrobots}/>

</div>

	);

}

}

export default App;
