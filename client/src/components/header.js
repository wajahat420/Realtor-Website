import '../css/App.css';
import Logo from "../imgs/realtor_logo.jpg"
import {NavLink} from "react-router-dom"
function App(props) {
  return (
    <div className="App">

    {/* <!-- Navigation --> */}
    <nav className="navbar navbar-expand-lg  navbar-custom">

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <span>
                <img src={Logo}/>
            </span>
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link page-scroll" >Home</NavLink>
                    {/* <ul className="">
                        <li className=""><a>Item 1</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                    </ul> */}

                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">BUY</a>
                    <ul className="">
                        <li className=""><a>Item 1</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">SELL</a>
                    <ul className="">
                        <li className=""><a>Item 1</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#request">RENT</a>
                    <ul className="">
                        <li className=""><a>Item 1</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#request">LEADS</a>
                    <ul className="">
                        <li className=""><a>Item 1</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link page-scroll" >Login</NavLink>
                </li>               
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link page-scroll" >Signup</NavLink>
                </li>                
                <li className="nav-item">
                    <NavLink to="/addProperty" className="nav-link page-scroll" >Add Property</NavLink>
                </li>
            </ul>
        </div>
    </nav> 


    </div>
  );
}

export default App;
