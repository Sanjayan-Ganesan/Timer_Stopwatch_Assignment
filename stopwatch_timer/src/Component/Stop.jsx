import React from 'react'

const Stop = () => {

const[time,settime] = React.useState(0);
const[timeron,settimeron] = React.useState(false);


React.useEffect(()=>{

let interval = null;

if(timeron){
    interval = setInterval(()=>{

        settime(prevtime => prevtime + 1);

    },0.25)
}else{
    clearInterval(interval);
}

return ()=>clearInterval(interval);



},[timeron])


  return (
<div>
<div id='time'>

<span><h1>{("0" + Math.floor((time / 14700) % 60)).slice(-2)}m</h1></span>
<span><h1>{("0" + Math.floor((time / 245) % 60)).slice(-2)}s</h1></span>
<span><h3>{("0" + Math.floor((time / 1) % 100)).slice(-2)}</h3></span>




</div>

<div id='buttons_box'>
    {!timeron && time === 0 && (
        <button onClick={()=> settimeron(true)}>Start</button>
    )}

    {(timeron && (
        <button onClick={()=>settimeron(false)}>Stop</button>
    ))}

    {! timeron && time !== 0 && (
        <button onClick={()=>settimeron(true)}>Resume</button>
    )}

    {!timeron && time > 0 && (
        <button onClick={()=>settime(0)}>Reset</button>
    )}
</div>


</div>
    
  )
}

export default Stop