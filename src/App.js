import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Form from './components/Form';
import Favorites from './components/Favorites'

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
      character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'tomaspino.velez@gmail.com';
   const PASSWORD = 'soyhenry5';

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
         </Routes>
      </div>
   );
}

export default App;
