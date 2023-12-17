import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"
import AddMovie from "./AddMovie"

const ListMovie=({movies,search,stars,setSearch,setStars,setMovies})=>{

    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase())&& el.rating >= stars)
    return(
    <div>
        <div>
        <FilterMovie setSearch={setSearch} setStars={setStars} search={search} stars={setStars}/>
        <AddMovie setMovies={setMovies} movies={movies}/>  
        </div>
        <div className="cards">
           {
            
            
            x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
           }
        </div>
    </div>
    )
}





export default ListMovie