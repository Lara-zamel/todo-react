import React from 'react';


function Counter ({completed, all}){
return <div className="counter">
<p className="content"> <span>{completed}</span> of <span>{all}</span> Tasks Completed </p>
</div>

}
export default Counter;