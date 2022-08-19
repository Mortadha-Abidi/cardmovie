import React,{useState} from 'react'
import { MovieList } from './component/MovieList'
import { Search } from './component/Search'
import { data } from './data'
import './App.css'
import { Addcard } from './Addcard'

 const App = () => {
const[movie,setMovie]=useState(data)
const [text, settext] = useState("")
const hadleAdd=(newMovie)=>{
setMovie([...movie,newMovie])
}
const handleEdit=(edited)=>{
  setMovie([...movie.map(el=>el.id===edited.id?edited:el)])
}

  return (
    <div>
      <Search text={text} settext={settext}/>
      <MovieList edit={handleEdit} movie={movie.filter(el=>(el.title.toLowerCase().includes(text.toLowerCase())) || el.description.includes(text))
      }/>
      <Addcard add={hadleAdd}/>
   </div>
  )
}
export default App
