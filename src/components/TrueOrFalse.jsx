import React, { useState } from 'react';
import LifecycleComponentFunc from './LifecycleComponentFunc';

const TrueOrFalse = () => {
   const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount (count => count +1)}>click</button>
            {count % 2 === 0 ? (
                <LifecycleComponentFunc />
            ) : (
                <p>Число нечетное, тыкни ещё</p>
            )}
        </div>
    )
}


export default TrueOrFalse;
