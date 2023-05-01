import React, {useState,useEffect} from 'react'

const Stopwatch = () => {

    const[hour,setHour]=useState(0);
    const[min,setMin]=useState(0);
    const[second,setSecond]=useState(0);
    const[miliSecond,setMiliSecond]=useState(0);
    const[stop,setStop]=useState(true);

    const onStart=()=>{
        setStop(false)
    }
    const onStop=()=>{
        setStop(true)
    }
    const onReset=()=>{
        setHour(0);
        setMiliSecond(0);
        setMin(0);
        setSecond(0);
        setStop(true);
    }
    useEffect(()=>{
        let val=null;
        console.log("calling");
        if(!stop){
            val=setInterval(()=>{
                if(min>59){
                    setHour(hour+1);
                    setMin(0);
                    clearInterval(val);
                }
                if(second>59){
                    setMin(min+1);
                    setSecond(0);
                    clearInterval(val);
                }
                if(miliSecond>999){
                    setSecond(second+1);
                    setMiliSecond(0);
                    clearInterval(val)
                }
                if(miliSecond<=999){
                    setMiliSecond(miliSecond+1);
                }
            },1)

        }
        else{
            clearInterval(val)
        }
        return()=>{
            clearInterval(val)
        }
    })
  return (
    <div style={{textAlign:'center', marginTop:'100PX'}}>
        <h1>{hour} : {min} : {second} : {miliSecond}</h1>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
