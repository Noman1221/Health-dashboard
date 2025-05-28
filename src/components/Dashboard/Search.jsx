import '@fortawesome/fontawesome-free/css/all.min.css';
import './Search.css';

function Search() {
    return (
        <div className='search-container'>
            <div className='search-bar'>
                <div className="searchInput">
                    <input type="text" placeholder='Search' className='search-Input' />
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
                <div className="notification">
                    <i className="fa-solid fa-bell notification-icon"></i>
                </div>
            </div>
        </div>
    );
}

export default Search;