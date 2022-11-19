import React, { useState , useEffect} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(0);
            alert("Number can't be less than 0")
        }
    }
    const reset = ()=>{
        setCount(0);
    }

    useEffect(()=>{
        console.log(count)
    })
  return (
    <div className='container-div'>
        
            <div className="main">

                <h1 className='head'>Count App</h1>
                    <h2 className='head2'>{count}</h2>
                    <div className='button-class'>
                    <button className='btn btn-success mx-3' onClick={increment}>Increment</button>
                    <button className='btn btn-danger mx-3' onClick={decrement}>Decrement</button>
                    {count>=10 && <><br /><button className='btn btn-secondary my-3' onClick={reset}>Go To 0</button></>}   
                </div>
            </div>
        </div>
  )
}

export default Counter