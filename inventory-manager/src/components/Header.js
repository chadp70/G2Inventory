import * as rbs from "react-bootstrap";
import "../css/Header.css";

let userName = "Login";
const Header = (props)=>{
    return (
    <rbs.Navbar expand="lg" className="bg-body-tertiary">
      <rbs.Container>
        <rbs.Navbar.Brand href="#home">{props.title}</rbs.Navbar.Brand>
        <rbs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <rbs.Navbar.Collapse id="basic-navbar-nav">
          <rbs.Nav className="ms-auto">
            <rbs.Button className='bg-body-tertiary adminButton' onClick={loginClick}><img width='32' height='32' src='images/login.png' alt='login' title='Login'/></rbs.Button>
            <div className='userName'>{userName}</div>
          </rbs.Nav>
        </rbs.Navbar.Collapse>
      </rbs.Container>
    </rbs.Navbar>
    
    )
}

const loginClick = ()=>{
  console.log("CLICKED!")
}
export default Header;