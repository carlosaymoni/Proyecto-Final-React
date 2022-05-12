import './NavBar.css' 

const NavBar = () => {
    return (
        <nav className="navBar" >
            <h1 className="logo" >E-commerce</h1>
            <div>
                <button className="btn-nav" >Inicio</button>
                <button className="btn-nav" >Contacto</button>
                <button className="btn-nav" >Login</button>
            </div>
        </nav>
    )
} 

export default NavBar