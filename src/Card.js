import React from 'react';

const Card = (props) => {

return (


<div1 className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

<img alt='robo' src={`https://robohash.org/${props.name}? 200x200`} />
<div>
<h2>{props.name}</h2>
<p>{props.email} </p>


</div>

</div1>

);

}
export default Card;
