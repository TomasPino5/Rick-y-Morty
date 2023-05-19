import Card from './Card';
import styles from './Cards.module.css'

export default function Cards({ characters, onClose}) {
   return (
   <div className={styles.divStyle} >
      {characters && characters.map(({name, species, gender, image, id, status, origin}) => (
         <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
         />
      ))}
   </div>
   );
}
