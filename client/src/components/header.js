import '../css/App.css';
import Logo from "../imgs/realtor_logo.jpg"

function App() {
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
                    <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                    <ul className="">
                        <li className=""><a>Item 1</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                        <li className=""><a>Item 2</a></li>
                    </ul>

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
       
            </ul>
            {/* <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span> */}
        </div>
    </nav> 


    </div>
  );
}

export default App;
