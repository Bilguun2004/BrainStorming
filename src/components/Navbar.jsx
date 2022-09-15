import '../styles/navbar.css'
import headerLogo from '../assets/icons/headerLogo.svg'
const Navbar = () =>{
    return(
        <div className='main'>
 <div className='header-container'>
            <img style={{width:'60px'}} src={headerLogo}/>
            <div className='headerItems'>
                <span className='headerText'>Products</span>
                <span className='headerText'>Services</span>
                <span className='headerText'>Contact</span>
                <span className='headerText'>Log in</span>
                <div className='get'>
                    Get Access
                </div>
            </div>
        </div>
        </div>
       
    )
}
export default Navbar