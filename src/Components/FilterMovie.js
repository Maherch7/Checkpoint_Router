import Rating from '@mui/material/Rating';
const FilterMovie=({setSearch,setStars,search,stars})=>{
    const handleReset=()=>{
        setSearch('')
        setStars(0)
    }
    return(
        <div>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text"/>
            <Rating value={stars} onChange={(e)=>setStars(e.target.value)}/>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}

export default FilterMovie