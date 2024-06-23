import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    const {data,navbarList} = useContext(UserContext); 
    const [searchQuery, setSearchQuery] = useState('');

    
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    // Css


    const filteredData = data?.filter((item) => {
        return item.original_title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return (
        <nav className='bg-[#222933] text-white '>
            <div className="   flex items-center ">
                <div className="ghost">
                <img className='mr-200px' src="https://uzmovi.com/images/logo.gif" alt="" />
                </div>
                <ul className='flex '>
                    {navbarList?.map((item) => (
                        <li key={item.id} className='py-10 px-4 transition-all delay-75 hover:bg-green-700 text-[#a5bbdc]  hover:text-white'>
                            <NavLink to={item.to}>{item.name}</NavLink>
                        </li>
                    ))}
                    
                </ul>
                <div className='killer'>
                <input
                        type="search"
                        className='search'
                        placeholder='Search movie'
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </div>
            {/* Display search results */}
            {searchQuery && (
                <div className="container mx-auto my-20">
                            <div className='grid grid-cols-3 gap-10'>
                            {
                             filteredData?.map((item)=>(
                                <div className="card transition-all hover:-translate-y-[25px] shadow-handle" key={item._id}>
                                  <img className='w-full' src={item.backdrop_path} alt="" />
                                  <h3>{item.original_title}</h3>
                                  <p>{item.overview.slice(0,120)}...</p>
                                  <p>{item.first_aired}</p>
                                  <NavLink to="/card" className='movie_btn' onClick={()=>setCard(item)}>See movie</NavLink>
                      
                                </div>
                            
                              ))
                              
                            } 
                          </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
