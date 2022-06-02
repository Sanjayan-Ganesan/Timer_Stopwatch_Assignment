import React, { useEffect } from 'react'

const Timer = () => {

const[seconds,setseconds] = React.useState(0);
const[minutes,setminutes] = React.useState(0);

var timer ;
useEffect(()=>{
    timer = setInterval(()=>{


        setseconds(seconds + 1);

        if(seconds == 59){
            setminutes(minutes + 1);
            setseconds(0);
        }

    },1000)

    return ()=>clearInterval(timer);
})

const handlerestart = ()=>{
    setseconds(0);
    setminutes(0);
}

const handlestop = ()=>{
    clearInterval(timer)
}

  return (
      <>
      <div>
          <h1>{minutes<10 ? "0"+minutes : minutes}:{seconds<10 ? "0"+seconds : seconds}</h1>


      </div>
      
      <button onClick={handlerestart}>Restart</button>
      <button onClick={handlestop}>Stop</button>
      </>

  )

}

export default Timer