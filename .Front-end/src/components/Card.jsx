import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addFav, removeFav } from '../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';

function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   return (
      <div className={styles.divCard}>
         <div className={styles.nameContainer}>
            {isFav ? (
               <button className={styles.botonFav} onClick={handleFavorite}>❤️</button>
               ) : (
               <button className={styles.botonFav} onClick={handleFavorite}>🤍</button>
               )
               }
               <button className={styles.cerrar} onClick={() => onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`} >
            <h2 className={styles.name}>{name}</h2>
         </Link>
         <img className={styles.imagen} src={image} alt='' />
         <h2 className={styles.h2}>{status}</h2>
         <h2 className={styles.h2}>{species}</h2>
         <h2 className={styles.h2}>{gender}</h2>
         <h2 className={styles.h2}>{origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)