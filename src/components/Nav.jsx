import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import SearchBar from './SearchBar';

const Nav = ({ onSearch }) => {
    return (
    <nav className={styles.nav}>
        <button className={styles.botones}>
            <Link to="/home">Home</Link>
        </button>
        <button className={styles.botones}>
            <Link to="/favorites">Favorites</Link>
        </button>
        <button className={styles.botones}>
            <Link to="/about">About</Link>
        </button>
        <SearchBar onSearch={onSearch} />
    </nav>
    )
}

export default Nav