import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="nnavbar navbar-dark bg-dark">
            <div className="container-fluid nav justify-content-center">
                <Link to='/' className='navbar-brand nav ' >MemeBanao</Link>
                <Link to='/' className='btn btn-success' >Home</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;