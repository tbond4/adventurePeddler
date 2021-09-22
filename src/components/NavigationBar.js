import { Navbar, Nav } from "react-bootstrap";
import APLogo from "../assets/fullLogo.jpeg";

function NavigationBar(){
    return(
        <Navbar expand="lg" style={{padding:"2%",fontFamily:"monospace", margin:"0",backgroundColor:"white",color:"orange"}}>
        <Navbar.Brand href="/">
      <img
        src={APLogo}
        width="auto"
        height="100"
        className="d-inline-block align-top"
        alt="Adventure Peddler logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavigationBar;
