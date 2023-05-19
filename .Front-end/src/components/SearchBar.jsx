import styles from './SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.searchDiv}>
         <input className={styles.searchInput} type='search' onChange={handleChange} value={id}/>
         <button className={styles.boton} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
