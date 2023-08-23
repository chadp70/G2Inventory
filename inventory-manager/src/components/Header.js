import * as rbs from "react-bootstrap";
import "../css/Header.css";

const Header = (props)=>{
    return (
    <rbs.Navbar expand="lg" className="bg-body-tertiary">
      <rbs.Container>
        <rbs.Navbar.Brand href="#home">{props.title}</rbs.Navbar.Brand>
        <rbs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <rbs.Navbar.Collapse id="basic-navbar-nav">

        </rbs.Navbar.Collapse>
      </rbs.Container>
    </rbs.Navbar>
    
    )
}

export default Header;