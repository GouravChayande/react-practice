import {MdSearch } from "react-icons/md"
import styles from './Search.module.css'

const Search = ({handleSearch}) => {
    const handleChange = (event) => {
        handleSearch(event.target.value);
    }

    return ( 
        <div className={styles.search}>
            <MdSearch className="search-icon" size="1.3em"></MdSearch>
            <input type="text" placeholder="Type to filter" onChange={handleChange} />
        </div>
     );
}
 
export default Search;