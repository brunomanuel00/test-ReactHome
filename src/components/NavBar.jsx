// import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (


        <nav class="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1 className="text-h1"><a className="navbar-brand text-a" href="#">World Preas</a></h1>

                <div className="d-flex mx-5 px-5">
                    <div className="">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="#">Shop</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#">NewStand</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#">Who we are</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#">My Profile</a></li>
                            <li className="nav-item"><button className="btn bton-1">Basket(3)</button></li>
                        </ul>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default NavBar;