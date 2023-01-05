interface Person { 
  name: string;
  age: number;
}

const data = await fetch('https://customer-f29a1.firebaseio.com/movies/movie.json')

const data1 = await data.json()
const data2:any[]= Object.values(data1)
//console.log(JSON.stringify(data2))
// const data3  = movies["LA Confidential"]
//let wqh = "wang qighua"movies

export default function Movie() {
  const movieItems:any[] = data2.map((movie):any=> { 
    return (<li>
      <div>{movie.title}</div>
      <div>{movie.country}</div>
      <img src={ movie.image} />
    </li>
    
    )
  })
  return (
    <div>
      <div>Movie Lists</div>
      

      <ul> {movieItems}</ul>
      
    </div>
  )
}
