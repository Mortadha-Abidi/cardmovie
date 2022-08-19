import AddModal from './AddModal'
import './movieCard.css'
import Stars from './Stars'

export const MovieCard = ({movie,edit}) => {  
  return (
    <div >
       <div className="card">

<div className="imgBox">
  <img src={movie.posterUrl} alt="mouse corsair" className="mouse"/>
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
