import { useState } from 'react';
import './App.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Trailer from './Components/Trailer';


function App() {
  const [movies,setMovies] = useState(
    [
      {title : 'Blood Diamond', description :"Alors qu'il purge une peine de prison pour ses trafics, Archer rencontre Solomon Vandy, un pêcheur d'origine Mende. Arraché à sa famille et forcé de travailler dans les mines diamantifères, ce dernier a trouvé - et caché - un diamant rose extrêmement rare.",posterURL:'https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',rating : 5, id : Math.random(), trailer : "https://www.youtube.com/embed/yknIZsvQjG4?si=99uy1aVFpo9db65i" },
      {title : 'Le Terminal', description :"Un immigrant fuyant la guerre qui ravage sa patrie minuscule d'Europe de l'Est se retrouve dans le terminal d'un aéroport de New York. Quand la guerre détruit totalement sa nation d'origine, l'homme comprend que son passeport et tous ses papiers d'identité ne sont plus valides.",posterURL:'https://www.originalfilmart.co.uk/cdn/shop/products/Terminal_2004_original_film_art_5000x.jpg?v=1602086404',rating : 3, id : Math.random(), trailer : "https://www.youtube.com/embed/iZqQRmhRvyg?si=439CjP3cpgPxV2j1"},
      {title :"Le Fabuleux Destin d'Amélie Poulain", description: "Amélie, une jeune serveuse dans un bar de Montmartre, passe son temps à observer les gens et à laisser son imagination divaguer. Elle s'est fixé un but : faire le bien de ceux qui l'entourent. Elle invente alors des stratagèmes pour intervenir incognito dans leur existence.",posterURL:'https://www.tallengestore.com/cdn/shop/products/Movie_Poster_-_Le_Fabuleux_Destin_d_Amelie_Poulain_-_Audrey_Tautou_-_Tallenge_Hollywood_Poster_Collection_11566fb4-1292-4214-b8c8-0ad6140defc6.jpg?v=1569189966',rating : 5, id : Math.random(), trailer : "https://www.youtube.com/embed/HUECWi5pX7o?si=TbHnSt5-NxK9mOdk" },
      {title : 'Oppenheimer', description :'Pendant la Seconde Guerre mondiale, le lieutenant-général Leslie Groves Jr. nomme le physicien J. Robert Oppenheimer pour travailler sur le projet ultra-secret Manhattan. Oppenheimer et une équipe de scientifiques passent des années à développer et à concevoir la bombe atomique. ',posterURL: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',rating : 2, id : Math.random(), trailer : "https://www.youtube.com/embed/uYPbbksJxIg?si=tdePIHoPksJm9OSF" },
  
    ]
  )
  const [search,setSearch] = useState('')
  const [stars,setStars] = useState(0)
  return (
    <div>
      <NavMovie/>

      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/Movies'  element={<ListMovie movies={movies} search={search} stars={stars} setSearch={setSearch} setStars={setStars} setMovies={setMovies}/>}/>
        <Route path='/Trailer/:id' element={<Trailer movies={movies}/>}/>
      </Routes>


      
      
    </div>
  );
}

export default App;
