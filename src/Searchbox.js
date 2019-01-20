import React from 'react';

const Searchbox=({Searchfield,Searchchange})=>
{

return(

<div className='pa2'>
<input type='Search' placeholder='Search robots' onChange={Searchchange}/>

</div>


	);



}
export default Searchbox; 