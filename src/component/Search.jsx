import React from 'react'

export const Search = ({text,settext}) => {
  return (
    <div className='inp'>
        <input type='text' value={text} onChange={(e)=>settext(e.target.value)} />
    </div>
  )
}
