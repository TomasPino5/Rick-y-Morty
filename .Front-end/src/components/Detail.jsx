import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Detail.module.css'

const Detail = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={styles.div}>
            <div className={styles.characterInfo}>
                <h2 className={styles.h2}>Nombre: {character.name}</h2>
                <h2 className={styles.h2}>Estado: {character.status}</h2>
                <h2 className={styles.h2}>Especie: {character.species}</h2>
                <h2 className={styles.h2}>Genero: {character.gender}</h2>
                <h2 className={styles.h2}>Planeta: {character.origin && character.origin.name}</h2>
            </div>
            <img className={styles.imagen} src={character.image} alt={character.name} /> 
        </div>
    )
}

export default Detail;