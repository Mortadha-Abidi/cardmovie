import AddModal from './AddModal'
import './movieCard.css'
import Stars from './Stars'
import { Link } from "react-router-dom";

export const MovieCard = ({movie,edit}) => {  
  return (

    <div >
      
       <div className="card">

<div className="imgBox">
<Link to={`/desc/${movie.id}`}> <img src={movie.posterUrl} alt="mouse corsair" className="mouse"/></Link>
</div>

<div className="contentBox">
  <h3>{movie.title}</h3>
  <h2 className="price">{movie.description}</h2>
  <Stars lol={movie.rating}/>
  <AddModal edit={edit} movie={movie} />
  

</div>

</div>

    </div>
    
  )
}
