import React,{useState,useEffect} from 'react'

const ScoreCalc = ({sum}) => {
  const [check,setCheck] = useState("");
  sum=Math.round(sum/6)
  useEffect(()=>{
    if(sum<=2) setCheck("You are fine")
    else if(sum<=4) setCheck("You are half mental half normal")
    else setCheck("You are mental")
  },[])
    return (
    <div>{check}</div>
  )
}

export default ScoreCalc