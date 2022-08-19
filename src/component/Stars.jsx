import React from 'react'

 const Stars = ({lol}) => {
    const ratings=(x)=>{
        let starts=[];
        for(let i=0;i<5;i++){
            if(i<x){
            starts.push(
                <span key={i} style={{color:"gold",cursor:"pointer"}}>★</span>
            )
            
        }else{
            starts.push(
                <span key={i} style={{color:"white",cursor:"pointer"}}>★</span>
            )
        }
    }
    return starts
    }
  return (
    <div>{ratings(lol)}</div>
  )
}
export default Stars
